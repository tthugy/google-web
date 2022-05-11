import React from 'react';
import { useState, useEffect } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "../css/Search.module.css";



const Search = () => {

    const [data, setData] = useState("");
    const [lang, setLang] = useState(0);

    const config = (event) => {
        setData(event.target.value);
    }

   const erase = () => {
        setData('');
   }

    return (
        <div className={styles.searchArea}>
            <form action='' method='GET' role='search'>
                <div className={styles.searchBox}>
                    <div className={styles.searchEngine}>
                        <div className={styles.searchLayout}>
                            <div className={styles.searchIcon}>
                                <div className={styles.sIconBox}>
                                    <span>
                                        <svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.searchHere}>
                                <div className={styles.searchBrick}></div>
                                <input id='sData' value={data} onChange={(event) => { return( event.target.value.length > 0 ? (setLang(1), config(event)) : (setLang(0), config(event))) }} className={styles.searchInput} maxLength='2048' type='text' autoComplete='off' autoCorrect='off' title='검색'></input>
                            </div>
                            <div className={styles.searchSpIcon}>
                                {lang === 0 
                                ? null : 
                                <div className={styles.delete}>
                                    <span className={styles.dBox} title='지우기'>
                                        <svg onClick={() => { return( (setLang(0), erase()) ) } } className={styles.dBtn} focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                        </svg>
                                    </span>
                                    <span className={styles.dLine}></span>
                                </div>
                                }
                                <div className={styles.srBtn}>
                                    <span className={styles.keyBtn} title='입력 도구'></span>
                                </div>
                                <div className={styles.srBtn} title='음성 검색'>
                                    <svg className={styles.srMike} focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                        <path fill='#4285f4' d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'></path>
                                        <path fill='#34a853' d='m11 18.08h2v3.92h-2z'></path>
                                        <path fill='#fbbc04' d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'></path>
                                        <path fill='#ea4335' d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.miniBox}>
                        <center>
                            <input className={styles.miniBtn} type='submit' value="Google 검색" />
                            <input className={styles.miniBtn} type='submit' value="I'm Feeling Lucky" />
                        </center>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;
