import React from 'react'
import "./CSS/PlaneAndPrice.css";

function PlaneAndPrice() {
    return (

        <div className="Header_Price">
            <div className="container priceandplane" style={{ display: 'flex' }}>
                <img src="http://godrejproperty.in/godrej-ananda/images/inr-icon.png" style={{ marginTop: 25, marginRight: 20, padding: 5, borderRadius: 10, border: "1px solid black" }} alt="" height="50" />
                <h3 >PLANS<br /> <span style={{ color: "white" }}  >& PRICES</span></h3>
            </div>

            <div className="cards container">
                <div className="card-body col-md-4 col-12">
                    <span>Type:</span>
                    <h4>STUDIO</h4>
                    <span>Size</span>
                    <h4>414 Sq.FT.</h4>
                    <span>Price</span>
                    <h4>₹ 22.99-25.99 Lakh*</h4>
                    <p>View Details</p>
                </div>

                <div className="card-body col-md-4 col-12">
                    <span>Type:</span>
                    <h4>2 BHK (TYPE 1 & 2)</h4>
                    <span>Size</span>
                    <h4>904-973 Sq.FT.</h4>
                    <span>Price</span>
                    <h4>₹ 39.99-44.99 Lakh*</h4>
                    <p>View Details</p>
                </div>

                <div className="card-body col-md-4 col-12">
                    <span>Type:</span>
                    <h4>2 BHK (TYPE 3)</h4>
                    <span>Size</span>
                    <h4>904-973 Sq.FT.</h4>
                    <span>Price</span>
                    <h4>₹ 42.99-45.99 Lakh*</h4>
                    <p>View Details</p>
                </div>

                <div className="card-body col-md-4 col-12">
                    <span>Type:</span>
                    <h4>3 BHK (TYPE 1)</h4>
                    <span>Size</span>
                    <h4>1162 Sq.FT.</h4>
                    <span>Price</span>
                    <h4>₹ 57.99-63.99 Lakh*</h4>
                    <p>View Details</p>
                </div>
                <div className="card-body col-md-4 col-12">
                    <span>Type:</span>
                    <h4>3 BHK (TYPE 2 - JODI)</h4>
                    <span>Size</span>
                    <h4>1162 Sq.FT.</h4>
                    <span>Price</span>
                    <h4>₹ 69.99-72.99 Lakh*</h4>
                    <p>View Details</p>
                </div>
            </div>
        </div>
    )
}

export default PlaneAndPrice
