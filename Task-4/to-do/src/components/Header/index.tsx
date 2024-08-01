import React from 'react';
import { header } from './Header.styles.ts';
const Header: React.FC = () => {
    return (
        <div className={header}>
            <h1>To-Do List</h1>
        </div>
    );
};


export default Header;