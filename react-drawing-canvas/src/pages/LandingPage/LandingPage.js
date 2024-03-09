import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import "./LandingPage.css"
import Dialog from "../../components/Dialog/Dialog"

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

function LandingBodyButton(props) {
  const { route, val } = props;
  return (
    <>
      <Link to={route} className="landing-body-button-container">
        <div >
          <button className="landing-body-button">
            <div className="container">
              <h2>{val}</h2>
            </div>
          </button>
        </div>
      </Link>
    </>
  );
}

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


function LandingBodyDialogButton(props) { 

    const { val, outerDialogFn } = props;

    const [dialogOpen, setDialogOpen] = useState(false); 

    function handleDialogOpen() {
        outerDialogFn(!dialogOpen)
    }


    return (
      <>
        <div className="landing-body-button-container">
          <button onClick={handleDialogOpen} className="landing-body-button">
            <div className="container">
              <h2>{val}</h2>
            </div>
          </button>
        </div>
      </>
    );
}

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


function LandingHeader() {
    return ( 
        <>
            <div className="landing-header-container"> 
                <h1 className='animated-gradient-text'>Welcome to js-paint!</h1>
            </div>
        </>
    );
}

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


function LandingPage(props) { 
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const showDialog = () => {
        setIsDialogOpen(true);
    }

    const closeDialog = () => {
        setIsDialogOpen(false);
    }
  
    return (
      <>
        <div className="landing-page-container">
            
        <Dialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          title={"Getting Started"}
        >
          <p>Welcome to js-paint! If you're new, please select the 
            "Create New Drawing" in order to create a new drawing. 
          </p>
          <p>
            Otherwise, select "Free Draw" to get into a new drawing.
          </p>
        </Dialog>
          <LandingHeader />
          <div className="landing-body-container">
            <LandingBodyButton route={`/NewDrawing`} val={`Create New Drawing`}/>
            <LandingBodyButton route={`/Gallery`} val={`Gallery`}/>
            <LandingBodyButton route={`/DrawingPage`} val={`Free Draw`}/>
            <LandingBodyDialogButton 
              val={`Getting Started`}
              outerDialogFn={showDialog}
            />
          </div>
        </div>
      </>
    );
}

export default LandingPage