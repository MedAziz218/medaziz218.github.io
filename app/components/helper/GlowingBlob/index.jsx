"use client";
import Head from 'next/head';
import blobStyles from './glowingblob.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function GlowingBlob() {
    const cursorSize = 0;
    let clientPos = {x:0,y:0};
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    // Function to handle mouse movement
    const handleMouseMove = e => {
        const { clientX, clientY } = e;
        clientPos = {clientX,clientY};
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        mouse.x.set(clientX - cursorSize / 2 + scrollX);
        mouse.y.set(clientY - cursorSize / 2 + scrollY);
    };

    // Function to handle scroll
    const handleScroll = () => {
        // When scrolling, adjust the position based on the current mouse position
        const { clientX, clientY } = clientPos;
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        mouse.x.set(clientX - cursorSize / 2 + scrollX);
        mouse.y.set(clientY - cursorSize / 2 + scrollY);
    };

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 ,duration: 0.3};
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    };

    useEffect(() => {
        // Keep track of the current mouse position for scroll adjustments
        const mousePosition = { clientX: 0, clientY: 0 };

        const manageMouseMove = e => {
            const { clientX, clientY } = e;
            mousePosition.clientX = clientX;
            mousePosition.clientY = clientY;
            handleMouseMove(e);
        };

        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <motion.div
                className={blobStyles.blob}
                style={{ left: smoothMouse.x, top: smoothMouse.y }}
                
            />
            <div className={blobStyles.blur}></div>
        </div>
    );
}
