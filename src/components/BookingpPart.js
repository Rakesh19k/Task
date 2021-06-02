import React from 'react'
import "./CSS/BookingPart.css"

function BookingpPart() {
    return (
        <div className="booking row">
            <div id="myCarousel" className="carousel slide col-md-9 col-12" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="http://godrejproperty.in/godrej-ananda/images/banner-1.jpg" alt="" />
                    </div>

                    <div className="item">
                        <img src="http://godrejproperty.in/godrej-ananda/images/banner-2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="submit-form col-md-3 col-12">
                <div className="text">
                    <h3>
                        GODREJ ANANDA
                    </h3>
                    <p>AEROSPACE PARK, BANGALORE</p>
                    <p>Mobile No - +91 9108899630</p>
                </div>
                <div className="amount">
                    <span>2 BHK | 39.99 lacs*</span>
                </div>
                <div className="amount"> 
                    <span>3 BHK | 57.59 lacs*</span>
                </div> 
                <div className="amount">
                    <span>STUDIO | 22.99 lacs*</span>
                </div>
                <div className="amount">
                    <span>Party Hall | 1.22 lacs*</span>
                </div>
            </div>

            {/* <div className="form-div">
                <form>
                    <input type="text" />
                    <input type="email" />
                    <input type="number" />
                    <input type="text" />
                </form>
            </div> */}
        </div>
    )
}

export default BookingpPart
