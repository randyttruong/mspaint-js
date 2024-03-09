import React, { useState, useContext } from 'react'
import "./NewDrawing.css"
import { useNavigate, useLocation } from "react-router-dom"

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

  const navigate = useNavigate();

    const [formData, setFormData] = useState("");
   
    function handleChange(event) { 
        setFormData(event.target.value);
    }

    function handleSubmit(event) { 
        event.preventDefault();

        navigate("/DrawingPage");
    }

    function goHome() { 
        navigate("/"); 
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
            <div className="whitespace" />
            <button type="submit" className="submit-button"> 
            <h2> Create </h2> </button>
          </form>
          <button className="submit-button" onClick={goHome}> 
            <h2> Home </h2> </button>
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