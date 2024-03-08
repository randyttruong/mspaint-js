import React, { useState } from 'react';
// import pencilSrc from "../../../public/pencilButton.svg";
// import eraserSrc from "../../../public/eraserButton.svg";
import pencilSrc from "../../resources/pencilButton.svg";
import eraserSrc from "../../resources/eraserButton2.svg";
import paletteSrc from "../../resources/paletteButton.svg";
import { ChromePicker } from 'react-color'; // Import the color picker component
import "./DrawingToolbar.css";


function PencilButton({onClick}) { 
    const [isActive, setIsActive] = useState(false); 

    return (
        <>
            {/* <div className="button-container"> */}
            <div className={`button-container ${isActive ? 'active' : ''}`} onClick={onClick}>
                {/* <img className="icon" src= { pencilSrc } />  */}
                <img className="icon" src= { pencilSrc } 
                    width = "30px"
                    height = "30px"/> 

            </div> 
        </> 
    );
}

function PaletteButton({onClick}) { 
    const [isActive, setIsActive] = useState(false); 

    return (
        <>
            {/* <div className="button-container"> */}
            <div className={`button-container ${isActive ? 'active' : ''}`} onClick={onClick}>
                {/* <img className="icon" src= { pencilSrc } />  */}
                <img className="icon" src= { paletteSrc } 
                    width = "30px"
                    height = "30px"/> 

            </div> 
        </> 
    );
}

function EraserButton({onClick}) { 
    const [isActive, setIsActive] = useState(false); 

    return (
        <>
            {/* <div className="button-container"> */}
            <div className={`button-container ${isActive ? 'active' : ''}`} onClick={onClick}>
                {/* <img className="icon" src= { eraserSrc } />  */}
                <img className="icon" src= {eraserSrc } 
                    width = "30px"
                    height = "30px"/>

            </div> 
        </> 
    );
}

function ColorPickerButton({ color, onChangeComplete }) {
    return (
        <div className={`palette-container`}>
            <ChromePicker color={color} onChangeComplete={onChangeComplete} />
        </div>
    );
}

function DrawingToolbar() {
    const [color, setColor] = useState('#000000'); // State to track the selected color

    const [activeButton, setActiveButton] = useState(null);

    const handleChangeComplete = (newColor) => {
        setColor(newColor.hex); // Update the selected color
    };

    const handleButtonClick = (buttonName) => { 
        if (activeButton === buttonName) { 
            setActiveButton(null);
        } else if (buttonName) { 
            setActiveButton(buttonName);
        }
    }


    const handlePenClick = () => { 
        handleButtonClick('pencil');
    }

    const handleEraserClick = () => {
        handleButtonClick('eraser');
    }

    const handlePaletteClick = () => {
        handleButtonClick('palette');
    }

    return (
        <>
            <div className="toolbar-container">
                {/* <DrawingToolbarButton icon={ pencilSrc } />
                <DrawingToolbarButton icon={ eraserSrc } />

                <div className="color-picker-container">
                    <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
                </div> */}
                <PencilButton onClick={handlePenClick} isActive={activeButton === "pencil"}/>
                <EraserButton onClick={handleEraserClick} isActive={activeButton === "eraser"}/>
                <PaletteButton onClick={handlePaletteClick} isActive={activeButton === "palette"}/>
                {activeButton === "palette" && <ColorPickerButton color={color} onChangeComplete={handleChangeComplete} />}
            </div>
        </>
    );
}

export default DrawingToolbar