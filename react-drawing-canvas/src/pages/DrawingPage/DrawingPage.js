import React, { useState, useContext } from 'react'
import "./DrawingPage.css"
import DrawingArea from "../../components/DrawingArea/DrawingArea"

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

function DrawingPage() { 
    return (
        <>
            <div className='drawing-page-container'>
                <DrawingArea />
            </div>
        </>
    );
}

export default DrawingPage