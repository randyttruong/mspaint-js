import React from 'react'
import "./GalleryEntry.css";

/* 
 * Props 
 * src: imgPath  
 * title: str  
 * author: str  
 * dateCreated: str  
 */

/* 
 * Note, still need to add images, but we can do that later lol 
 *
 */ 
 


function GalleryEntry({src, title, author, dateCreated}) { 
    return ( 
        <>
        <div> 
         <div className="gallery-entry-container"> 
            <h1>{title}</h1> 
            <h2>{author}</h2> 
            <h2>{dateCreated}</h2> 
            </div> 
         </div> 
        </> 
    );
} 

export default GalleryEntry