import React,{ useState, useContext } from 'react'
import "./GalleryEntry.css"
import { Image } from 'react-konva';

/* 
 * Represents a gallery entry within the gallery subpage.
 * 
 * @component 
 * @example
 * const entryExample = { };
 * 
 * @param {string} `title` The art piece's title 
 * @param {string} `description` The art piece's description
 * 
 */

function GalleryEntry(props) { 

    const { img, 
            title, 
            description } = props;  // destructure the props 

    return(
        <>
            <div className='gallery-entry-container'> 
                <div className='gallery-entry-image'>
                    test
                </div>
                <div className='gallery-entry-body'>
                    <div className="gallery-entry-header"> 
                        <h1>{title}</h1>
                    </div>
                    <div className='gallery-entry-description'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GalleryEntry