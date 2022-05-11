import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "../css/Body.module.css";



const Body = () => {
    return (
        <div className={styles.bHair}>
            <div className={styles.bIntroBox}>
                <span className={styles.red}>Live!</span>
                <a href='' className={styles.subLink}>Google을 시청하세요</a>
                <span> 최신 기능, 소식, 출시 계획을 소개합니다</span>
            </div>
            <div className={styles.bBox}>
                <div className={styles.bLayout}>
                    <div className={styles.bLayout}>
                    Google 제공 서비스:
                    <a href="" className={styles.bTransBtn}>English</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
