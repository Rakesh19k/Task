import React, { useState } from 'react'
import "./CSS/Header.css"
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import { Route, Switch, useHistory } from "react-router-dom";
import PopUp from "./PopUp"

function Header() {
    const [toggle, setToggle] = useState(false)
    const history = useHistory();

    const menuToggle = () => {
        setToggle({ toggle: !toggle })
        console.log("click")
    }




    return (
        <div className="header">
            <div className="header-title">
                <div className="logo">
                    <h2>GODREJ | PROPERTIES</h2>
                </div>
                <div className="menu" onClick={menuToggle}>
                    <img src={Menu} alt="" width="20" />
                </div>
            </div>
            <div className="header-options">
                
                    <Route><li>Overview</li></Route>
                    <Route><li>Feature</li></Route>
                    <Route><li>Payment & Price</li></Route>
                    <Route><li>Highlights</li></Route>
                    <Route><li>Other Details</li></Route>
                    <Switch>
                    <Route component={PopUp}><li>Brochure</li></Route>
                    </Switch>
                    <Route><li>Discount offers</li></Route>
                    <Route> <li>Book A Site Visit</li></Route>
                    
        
            </div>
        </div>
    )
}

export default Header
