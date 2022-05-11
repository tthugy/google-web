import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "../css/Main.module.css";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className={styles.main}>
            <Header />
            <Logo />
            <Search />
            <Body />
            <Footer />
        </div>
    )
}

export default Main;
