import React, { useState, useContext } from 'react'
import "./DrawingPage.css"
import DrawingArea from "../../components/DrawingArea/DrawingArea"
import { Link } from "react-router-dom"
import DrawingToolbar from '../../components/DrawingToolbar/DrawingToolbar'

/* 
 * 
 *
 */
function DrawingUI(props) { 
    const { setSelectedTool, setBrushColor } = props; 
    return (
        <>
            <div className="drawing-ui-container">
                <DrawingToolbar setSelectedTool={setSelectedTool} setBrushColor={setBrushColor} /> {/* Render the DrawingToolbar component */}
                {/* Add any other UI components related to drawing here */}
            </div>
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
                            <h2 className="text">{val}</h2>
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
    const [selectedTool, setSelectedTool] =  useState(null);
    const [brushColor, setBrushColor] = useState(null);

    const handleSelectedTool = (e) => {  
        setSelectedTool(e); 
    }
    const handleBrushColor = (e) => {
        setBrushColor(e);
    }

    return (
      <>
        {/* <div className="drawing-page-container"> */}
            <MainMenuBotton route={"/"} val={"Home"}></MainMenuBotton>

            <DrawingUI setSelectedTool={handleSelectedTool} setBrushColor={handleBrushColor}/>
          <div className="drawing-area-container">
            <DrawingArea selectedTool={selectedTool} color={brushColor}/>
          </div>
        {/* </div> */}
      </>
    );
}

export default DrawingPage