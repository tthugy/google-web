import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "../css/Logo.module.css";



const Logo = () => {
    return (
        <div className={styles.logos}>
            <div className={styles.logoLayout}>
                <img className={styles.logoImg} alt="Google" width="272" height="92" src={`img/logo.png`}></img>
            </div>
        </div>
    )
}

export default Logo;
