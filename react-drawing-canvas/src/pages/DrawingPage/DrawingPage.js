import React, { useState, useContext } from 'react'
import "./DrawingPage.css"
import DrawingArea from "../../components/DrawingArea/DrawingArea"
import { Link } from "react-router-dom"

/* 
 * 
 *
 */
function DrawingUI() { 
    return (
        <>
        </>
    );
}

/* 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

function MainMenuBotton(props) {
    const {route, val } = props;
    return (
        <>
            <Link to={route} className="main-menu-button-container">
                <button className="main-menu-button">
                    <div className="container">
                        <h2>{val}</h2>
                    </div>
                </button>
            </Link>
        </>
    );
}

/*
*
*
*
*/

function DrawingPage() { 
    return (
        <>
            <div className="drawing-page-header">
                <MainMenuBotton route={'/'} val={'Main Menu'}></MainMenuBotton>
            </div>
            <div className='drawing-page-container'>
                <DrawingUI /> 
                <div className='drawing-area-container'>
                    <DrawingArea />
                </div>
            </div>
        </>
    );
}

export default DrawingPage