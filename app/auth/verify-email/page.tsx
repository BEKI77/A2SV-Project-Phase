'use client';
import React, { useEffect, useState } from "react";
import OTP from "./OTP/OTP";
import axios, { isAxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";


export default function(){
    const [timeLeft, setTimeLeft] = useState(30);
    const cookies = useCookies();
    useEffect(() => {
      if (timeLeft <= 0) return;

      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
          2,
          "0"
        )}`;
    };

    const router = useRouter();
    const [error, setError] = useState("");
    const handleSubmit = async (pin: string) => {
        const userEmail = cookies.get("userEmail");
        const formData = JSON.stringify({
            email: userEmail,
            OTP: pin.toString(),
        });

        console.log(formData);
        
        try {
            const response = await axios.post(
                "https://akil-backend.onrender.com/verify-email",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response);

            if (response.status === 200) {
                console.log(response);
                Cookies.set("access-token", response.data.data.accessToken);
                router.push("/Job");
            }
        } catch (err) {
            console.log(err);
            if (isAxiosError(err) && err.response) {
                console.log(err.response.data.message);
                setError(err.response.data.message);
            } else {
                setError("An unknown error occurred");
            }
        }
  };

    return (
            <div className="h-[600px] w-[500px] my-auto">
                <div>
                  <p>We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.</p>
                </div>
                  <form className="mt-12">
                    <OTP onComplete={handleSubmit} />
                    <p className="text-center text-sm my-2">
                      You can request to{" "}
                      <button
                        className="text-[#2D298E] font-semibold disabled:text-slate-500"
                        disabled
                      >
                        Resend code
                      </button>{" "}
                      in{" "}
                    </p>
                    <p className="text-center text-sm my-2 text-[#2D298E] font-semibold mb-12">
                      {formatTime(timeLeft)}
                    </p>
                    {error && (
                      <p className="text-red-500 text-center mt-2 mb-5">{error}</p>
                    )}
                    <button
                      type="submit"
                      className="bg-[#2D298E] disabled:bg-opacity-30 w-[100%] text-white p-2 rounded-full disabled:bg-[#4640DE] disabled:cursor-not-allowed"
                      disabled
                    >
                      Continue
                    </button>
                  </form>
              </div>
    )
}

