import React, { useState, useContext } from 'react'
import "./DrawingPage.css"
import DrawingArea from "../../components/DrawingArea/DrawingArea"
import { Link, useNavigate, useLocation } from "react-router-dom"
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
                <DrawingToolbar 
                    setSelectedTool={setSelectedTool} 
                    setBrushColor={setBrushColor} /> {/* Render the DrawingToolbar component */}
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
    const navigate = useNavigate();
    const handleMenuClick = (e) => { 
        navigate("/");
        e.stopPropagation();
    } 

    return (
        <>
            <div className="main-menu-button-container">
                <button onClick={handleMenuClick} className="main-menu-button">
                    <div className="container">
                        <h2 className="text">{val}</h2>
                    </div>
                </button>
            </div> 
        </>
    );
}

/*
*
*
*
*/

function DrawingPage() { 
    console.log("pain")
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
            <MainMenuBotton route={"/"} val={"Home"}></MainMenuBotton>

            <div>
            <DrawingUI setSelectedTool={handleSelectedTool} setBrushColor={handleBrushColor}/>
          <div className="drawing-area-container">
            <DrawingArea  selectedTool={selectedTool} color={brushColor}/>
          </div>
          </div> 
      </>
    );
}

export default DrawingPage