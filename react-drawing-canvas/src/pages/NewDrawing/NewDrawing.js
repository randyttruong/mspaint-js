import React, { useState, useContext } from 'react'
import "./NewDrawing.css"

/* 
 * @component NewDrawingHeader
 * @params 
 * - None 
 * 
 * This component simply just represents a header for the NewDrawing page 
 * 
 */
function NewDrawingHeader(props) { 
    return (
        <>
            <div className="header-container">
                <h1 className='animated-gradient-text'>Let's create something special...</h1>
            </div>
        </>
    );
}

/* 
 * @component NewDrawingForm
 * @params 
 * 
 * This is a component that represents the form for creating 
 * a new drawing. 
 */
function NewDrawingForm(props) { 

    const [formData, setFormData] = useState("");
   
    function handleChange(event) { 
        setFormData(event.target.value);
    }

    function handleSubmit(event) { 
        event.preventDefault();
    }

    return (
      <>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="Name" className="input-container-header">
              Name
            </label>
            <input
              className="input-container"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <button type="submit" className="submit-button"> Create </button>
          </form>
        </div>
      </>
    );
}

/*
 * @component NewDrawing 
 * This is a component that represents the NewDrawing 
 * @params 
 * - None 
 */ 
function NewDrawing(props) { 
    return (
        <>
            <div className="new-drawing-container">
                <NewDrawingHeader />
                <NewDrawingForm />
            </div>
        </>
    );
}

export default NewDrawing 