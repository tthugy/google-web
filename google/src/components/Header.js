import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "../css/Header.module.css";



const Header = () => {
    return (
        <div className={styles.nav}>
            <a className={`${styles.ml15} ${styles.leftBtn}`}>Google 정보</a>
            <a className={styles.leftBtn}>스토어</a>
            <div className={styles.RtBox}>
                <div className={styles.RtInner}>
                    <div className={styles.RtLayout}>
                        <div className={styles.RtLeft}>
                            <div className={styles.RtlCont}>
                                <a className={styles.RtlBtn}>Gmail</a>
                            </div>
                            <div className={styles.RtlCont}>
                                <a className={styles.RtlBtn}>이미지</a>
                            </div>
                        </div>
                        <div className={styles.RtRight}>
                            <div className={styles.menuBox}>
                                <div className={styles.menuBtn}>
                                    <a className={styles.menuTag} title='Google 앱'>
                                        <div className={styles.tagbg}></div>
                                        <svg className={styles.menuSvg} focusable='false' viewBox='0 0 24 24'>
                                            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.profile} title='Google 계정'>
                                <a className={styles.pfBtn}>
                                    <img className={styles.pfImg} src={`img/profile.jpeg`}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
