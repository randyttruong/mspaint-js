import React, { useState } from 'react';
// import pencilSrc from "../../../public/pencilButton.svg";
// import eraserSrc from "../../../public/eraserButton.svg";
import pencilSrc from "../../resources/pencilButton.svg";
import eraserSrc from "../../resources/eraserButton2.svg";
import { ChromePicker } from 'react-color'; // Import the color picker component


function PencilButton({onClick}) { 
    const [isActive, setIsActive] = useState(false); 

    return (
        <>
            {/* <div className="button-container"> */}
            <div className={`button-container ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
                {/* <img className="icon" src= { pencilSrc } />  */}
                <img src= { pencilSrc } 
                    width = "40px"
                    height = "40 px"/> 

            </div> 
        </> 
    );
}

function EraserButton({onClick}) { 
    const [isActive, setIsActive] = useState(false); 

    return (
        <>
            {/* <div className="button-container"> */}
            <div className={`button-container ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
                {/* <img className="icon" src= { eraserSrc } />  */}
                <img src= {eraserSrc } 
                    width = "40px"
                    height = "40px"/>

            </div> 
        </> 
    );
}

function ColorPickerButton({ color, onChangeComplete }) {
    const [isActive, setIsActive] = useState(false); 

    return (
        <div className={`button-container ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
            <ChromePicker color={color} onChangeComplete={onChangeComplete} />
        </div>
    );
}

function DrawingToolbar() {
    const [color, setColor] = useState('#000000'); // State to track the selected color

    const handleChangeComplete = (newColor) => {
        setColor(newColor.hex); // Update the selected color
    };

    return (
        <>
            <div className="toolbar-container">
                {/* <DrawingToolbarButton icon={ pencilSrc } />
                <DrawingToolbarButton icon={ eraserSrc } />

                <div className="color-picker-container">
                    <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
                </div> */}
                <PencilButton />
                <EraserButton />
                <ColorPickerButton color={color} onChangeComplete={handleChangeComplete} />
            </div>
        </>
    );
}

export default DrawingToolbar