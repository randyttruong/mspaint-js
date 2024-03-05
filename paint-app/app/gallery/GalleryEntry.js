import React from 'react'
import "./GalleryEntry.css";

/* 
 * Props 
 * src: imgPath  
 * title: str  
 * author: str  
 * dateCreated: str  
 */


function GalleryEntry({src, title, author, dateCreated}) { 
    return ( 
        <>
         <div className="gallery-entry-container"> 
            <h1>{title}</h1> 
            <h2>{author}</h2> 
            <h2>{dateCreated}</h2> 
            </div> 
        </> 
    );
} 

export default GalleryEntry