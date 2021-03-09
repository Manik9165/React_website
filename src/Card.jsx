import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} height="300" width="300" className="card-img-top" alt="Images" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-outline-success">{props.read}</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;