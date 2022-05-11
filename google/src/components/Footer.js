import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "../css/Footer.module.css";



const Logo = () => {
    return (
        <footer>
            <div className={styles.fBlock}>대한민국</div>
            <div className={styles.sBlock}>
                <div className={styles.sInnerBlock}>
                    <a href='https://ads.google.com/intl/ko_kr/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1' className={styles.sInnerBtn}>광고</a>
                    <a href='https://www.google.com/intl/ko_kr/business/' className={styles.sInnerBtn}>비즈니스</a>
                    <a href='https://www.google.com/search/howsearchworks/?fg=1' className={styles.sInnerBtn}>검색의 원리</a>
                </div>
                <div className={styles.sInnerBlock}>
                    <a href='https://policies.google.com/privacy?hl=ko&fg=1' className={styles.sInnerBtn}>개인정보처리방침</a>
                    <a href='https://policies.google.com/terms?hl=ko&fg=1' className={styles.sInnerBtn}>약관</a>
                    <a className={styles.sInnerBtn}>설정</a>
                </div>
            </div>
        </footer>
    )
}

export default Logo;
