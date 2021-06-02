import React from 'react'
import "./CSS/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid row">
                <div className="col-md-4 col-12">
                    <div className="footer-hader" style={{ display: "flex", width: "100%" }}>
                        <h3>GODREJ ANANDA</h3>
                        <span>AEROSPACE PARK,</span>
                    </div>
                    <p style={{ fontSize: 12, fontWeight: 600 }}>BANGALORE</p>
                </div>

                <div className="col-md-8 col-12" >
                    <ul style={{ display: 'flex', justifyContent: 'space-evenly', listStyle: "none", marginTop: 40}}>
                        <li>Overview</li>
                        <li>Feature</li>
                        <li>Payment & Price</li>
                        <li>Highlights</li>
                        <li>Others Details</li>
                        <li>Brochure</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-content container">
                <span>Disclaimer : This Website is belong to authorized chanel partner of Godrej Properties for the Godrej Project & This is not the official website of Godrej Properties.s
                <br/>RERA REGISTRATION: P51700027436<br/>
                Privacy Policy</span>
            </div>
        </div>
    )
}

export default Footer
