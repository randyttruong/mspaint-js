import React from "react";
import pencilSrc from "../../../public/pencilButton.svg";
import eraserSrc from "../../../public/eraserButton.svg";
import { ChromePicker } from 'react-color'; // Import the color picker component


function PencilButton() { 
    const [isActive, setIsActive] = useState(false); 

    return (
        <>
            <div className="button-container">
                <img className="icon" src= { pencilSrc } /> 
            </div> 
        </> 
    );
}

function EraserButton() { 
    const [isActive, setIsActive] = useState(false); 

    return (
        <>
            <div className="button-container">
                <img className="icon" src= { eraserSrc } /> 
            </div> 
        </> 
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
                <DrawingToolbarButton icon={ pencilSrc } />
                <DrawingToolbarButton icon={ eraserSrc } />

                {/* I'm not sure if the color picker will work */}
                <div className="color-picker-container">
                    <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
                </div>
                
            </div>
        </>
    );
}

export default DrawingToolbar