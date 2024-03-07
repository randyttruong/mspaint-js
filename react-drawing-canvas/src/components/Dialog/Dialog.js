import React, { useState } from "react"
import "./Dialog.css"

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

function Dialog(props) {
    const {
        isOpen,
        onClose,
        title,
        children
    } = props;

    if (!isOpen) { 
        return (
            <>
            </>
        );
    }

    return (
      <>
        <div className="dialog-overlay">
          <div className="dialog">
            <h2 className="dialog-header">{title}</h2>
            <div className="dialog-content">
              {children}
              <div className="dialog-close-button-container">
                <button className={"dialog-close-button"} onClick={onClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Dialog