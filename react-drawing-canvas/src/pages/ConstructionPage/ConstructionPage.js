import React from "react";
import "./ConstructionPage.css"
import { Link } from "react-router-dom"

/* 
 * @component BodyButton
 * @params
 * 
 * This is a component that represents a body button for the 
 * construction page. 
 */

function BodyButton(props) {
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
 * @component Construction()
 * @params 
 * - None 
 * 
 * This is a component that represents a Construction page
 */
function ConstructionPage() {
    return (
        <>
            <div className="construction-container"> 
                <h1 className="header">Sorry... the feature you were looking for is under
                    construction!
                </h1>
                <BodyButton route={"/"} val={"Take me back"} />
            </div>
        </>
    );
}

export default ConstructionPage