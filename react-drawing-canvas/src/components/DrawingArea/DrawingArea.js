import { React } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState, useRef } from 'react';
import "./DrawingArea.css"



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

const DrawingArea = ({onClearLines, clearLines, selectedTool, color}) => {
    
    if (!color) {
        color = "#000000"
    }

    const [lines, setLines] = useState([]);
    const isDrawing = useRef(false);

    useEffect(() => {
        //loadImage();
    }, [clearLines])
    
    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        if (selectedTool === "eraser"){
            color = "#ffffff";
        }
        setLines([...lines, { points: [pos.x, pos.y], color }]);
    };
    
    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
          return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
    
        // To draw line
        let lastLine = lines[lines.length - 1];
        
        if(lastLine) {
            // add point
            lastLine.points = lastLine.points.concat([point.x, point.y]);
                
            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.slice(0,-1).concat(lastLine));
        }
        
    };
    
    const handleMouseUp = () => {
        isDrawing.current = false;
        // 
    };

    return (
        <div className="drawingArea">
            <Stage
                // width={600}
                width={window.innerWidth}
                // height={600}
                height={window.innerHeight}
       
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseup={handleMouseUp}
                className="canvas-stage"
                // className='canvas-format'
                // style={{ margin: '0 auto', display: 'block' }} // Centering the Stage
            >
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                        key={i}
                        points={line.points}
                        // stroke={ 
                        //     (selectedTool === "eraser") ? "#ffffff" : line.color
                        // }
                        stroke={line.color}
                        strokeWidth={2}
                        tension={0.5}
                        lineCap="round"
                        globalCompositeOperation={
                            line.tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    )
}

export default DrawingArea





// import React, { useEffect, useState, useRef } from 'react';
// import { Stage, Layer, Line } from 'react-konva';
// import './DrawingArea.css';

// const DrawingArea = ({ selectedTool, color }) => {
//   const [lines, setLines] = useState([]);
//   const isDrawing = useRef(false);

//   const handleMouseDown = (e) => {
//     isDrawing.current = true;
//     const pos = e.target.getStage().getPointerPosition();
//     // Include color information with each line
//     setLines([...lines, { tool: selectedTool, points: [pos.x, pos.y], color }]);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDrawing.current) {
//       return;
//     }
//     const stage = e.target.getStage();
//     const point = stage.getPointerPosition();
//     let lastLine = lines[lines.length - 1];
//     if (lastLine) {
//       lastLine.points = lastLine.points.concat([point.x, point.y]);
//       // Update lines with the new point added to the last line
//       setLines(lines.slice(0, -1).concat(lastLine));
//     }
//   };

//   const handleMouseUp = () => {
//     isDrawing.current = false;
//   };

//   useEffect(() => {
//     if (clearLines) {
//       setLines([]); // Clear lines when the clearLines flag is true
//     }
//   }, [clearLines]);

//   return (
//     <div className="text-center text-dark">
//       <Stage
//         width={window.innerWidth}
//         height={window.innerHeight}
//         onMouseDown={handleMouseDown}
//         onMousemove={handleMouseMove}
//         onMouseup={handleMouseUp}
//         className="canvas-stage"
//       >
//         <Layer>
//           {lines.map((line, i) => (
//             <Line
//               key={i}
//               points={line.points}
//               stroke={line.color} // Use the color associated with each line
//               strokeWidth={2}
//               tension={0.5}
//               lineCap="round"
//               globalCompositeOperation={
//                 line.tool === 'eraser' ? 'destination-out' : 'source-over'
//               }
//             />
//           ))}
//         </Layer>
//       </Stage>
//     </div>
//   );
// };

// export default DrawingArea;