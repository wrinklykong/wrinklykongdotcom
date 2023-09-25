import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const NavBar =() => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkUp" aria-controls="navbarNavAltMarkUp" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkUp">
                    <a className="nav-link active textColor" href={"/Clothes"}>Products<span className="sr-only">(current)</span></a>
                    <a className="nav-link active textColor" href={"/Cart"}>Cart<span className="sr-only">(current)</span></a>
                    <a className="nav-link active textColor" href={"/Purchasepage"}>Orders<span className="sr-only">(current)</span></a>
                    <a className="nav-link active textColor" href={"/AboutUs"}>About<span className="sr-only">(current)</span></a>
                    <div className="container-fluid textColor text-right">
                        <button className="btn btn-outline-secondary my-2 my-sm-0">Log Out</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;