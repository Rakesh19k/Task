import React from 'react'
import "./CSS/OverView.css"
import PlaneAndPrice from './PlaneAndPrice'
import Plus from "./svg/plus.png"

function OverView() {
    return (
        <>
            <div className="container">
                <div className="row" style={{ width: "100%" }}>
                    <div className="col-md-5" style={{ display: 'flex' }}>
                        <img src="https://icon2.cleanpng.com/20180320/dfe/kisspng-computer-icons-crown-clip-art-crown-svg-free-5ab1367be70421.4472188515215632599463.jpg" style={{ marginTop: 25, marginRight: 20, padding: 5, borderRadius: 10, border: "1px solid black" }} alt="" height="50" />
                        <h3 className="col-md-5">GODREJ <span style={{ color: "burlywood" }}>ANANDA</span></h3>
                    </div>
                    <p className="col-md-6" style={{ fontSize: 14, wordSpacing: 5 }}>Bangalore, the vibrant city of India is today one of the potential real estate destinations of the modern urban home buyers. The city has been rapidly flourishing, and the realty industry has been thriving, offering worldclass properties in the best of the locations across the city.<br /><br />

                        Godrej Properties, the established real estate developer of India has been transforming the realty sector with its extraordinary properties. Godrej Properties now launches Godrej Ananda, a premium residential complex in Bagalur Road, Bangalore. Grodrej Ananda is magnificent and will be just apt for your new address.<br /><br />

                        Godrej Ananda is a new launch project in Bangalore. The launch date is March 2021, and the completion date of the project is January 2026. The property is being meticulously developed with innovation as the keyword and contemporary designs. Lush greenery and fascinating views define the surroundings, which will be a treat for your senses.</p>
                </div>

                <div className="row" style={{ marginTop: 60, width: "100%" }}>
                    <div className="col-md-5" style={{ display: 'flex' }}>
                        <img src="http://godrejproperty.in/godrej-ananda/images/life-at-park.png" style={{ marginTop: 25, marginRight: 20, padding: 5, borderRadius: 10, border: "1px solid black" }} alt="" height="50" />
                        <h3 >About GODREJ<br /> <span style={{ color: "burlywood" }}  >PROPERTIES</span></h3>
                    </div>
                    <p className="col-md-6" style={{ fontSize: 14, wordSpacing: 5 }}>Godrej Properties brings the Godrej Group philosophy of innovation and excellence to the real estate industry. The company is currently developing landmark projects in 12 cities across India. Established in 1990, Godrej Properties Limited is the first real estate company to have ISO certification. With projects that span across the country, the company's upcoming development covers over 8 million square meters.</p>
                </div>
            </div>
            <PlaneAndPrice />

            <div className="container" style={{ marginBottom: 40, marginTop: 350 }}>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-10.jpg" alt="Los Angeles" />
                            <div className="carousel-caption images-text">
                                <h3>GODREJ GROUP</h3>
                            </div>
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-7.jpg" alt="Chicago" />
                            <div className="carousel-caption images-text">
                                <h3>GODREJ GROUP</h3>
                            </div>
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-8.jpg" alt="New York" />
                            <div className="carousel-caption images-text">
                                <h3>GODREJ GROUP</h3>
                            </div>
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-9.jpg" alt="New York" />
                            <div className="carousel-caption images-text">
                                <h3>GODREJ GROUP</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background"></div>


            <div className="highlights container">
                <div style={{ display: 'flex' }}>
                    <img src="http://godrejproperty.in/godrej-ananda/images/our-ser.png" style={{ marginTop: 25, marginRight: 20, padding: 5, borderRadius: 10, border: "1px solid black" }} alt="" height="50" />
                    <h3 >PROJECT<br /> <span style={{ color: "burlywood" }}  >HIGHLIGHTS:</span></h3>
                </div>
                <div className="row highlight">
                    <div className="col-md-6 col-12">
                        <ul>
                            <li>FLOORS - 3B+G+28</li>
                            <li>SECURITY AMENITIES</li>
                            <li>LIFESTYLE CLUB</li>
                            <li>2 ACRES OF GREENS</li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-12">
                        <ul>
                            <li>Multipurpose Hall</li>
                            <li>Business Center</li>
                            <li>Indoor Games Room</li>
                            <li>Dance & Zumba Studio</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="container" style={{ paddingLeft: "8%" }}>
                <div className="btn" data-toggle="collapse" data-target="#dropdown">
                    <img src={Plus} alt="" width="50" />
                    <span type="button" className="location-btn" style={{ paddingLeft: 40 }}>Location Map</span>
                </div>
                <div className="row container pl-5">
                    <div id="dropdown" className="collapse">
                        <div className=" col-md-6 col-12">
                            With wide roads connecting to the International airport, good connectivity from the ring road, presence of several IT parks such as Manyata, Ecopolis, and ITSEZ, North Bangalore is indeed one of the best places to live and invest in. The upcoming Line-5 (Central Silk Board-KIA Terminal) of Namma Metro, with a completion deadline of mid-2025, having metro stations in Hebbal, Yelahanka, and Jakkur Cross shall signicantly improve the connectivity of North Bangalore with other parts of the city and also provide an impetus to capital and rental prices in the region.

                        </div>
                        <div className="col-md-6 col-12">
                            <iframe src="https://www.google.com/maps/dir/12.9090132,77.598308/godrej+ananda/@13.0298532,77.4886145,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae1b413aeea35b:0x20035784b271ee37!2m2!1d77.6743886!2d13.1478776" />
                        </div>
                    </div>

                </div>
            </div>


            <div className="container" style={{ paddingLeft: "8%", marginTop:"-50px" }}>
                <div className="btn" data-toggle="collapse" data-target="#dropdown1">
                    <img src={Plus} alt="" width="50" />
                    <span type="button" className="location-btn" style={{ paddingLeft: 40 }}>Amenities</span>
                </div>
                <div className="row container-fluid pl-5 pr-5" style={{ textAlign: "center" }}>
                    <div id="dropdown1" className="collapse">
                        <h4 style={{ fontWeight: 400 }}>LIFESTYLE CLUB</h4>
                        <div className="images row container">
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/multipurpose-hall.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Multipurpose Hall</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/business-center.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Business Center</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/indoor-games-room.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Indoor Games Room</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/Library.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Library</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/dance-zuma-studio.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Dance & Zumba Studio</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/swimming-pool.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Swimming Pool</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/roof-top-garden.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Roof Top Garden</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/av-room.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>AV Room</h3>
                                </div>
                            </div>
                        </div>

                        <div className="images row container">
                            <h4 style={{ fontWeight: 400 }}>2 ACRES OF GREENS</h4>

                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/multipurpose-hall.jpg" alt="" />
                                <div className="carousel-caption images-text ">
                                    <h3>Multipurpose Hall</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/business-center.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Business Center</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/indoor-games-room.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Indoor Games Room</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/Library.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Library</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/dance-zuma-studio.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Dance & Zumba Studio</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/swimming-pool.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Swimming Pool</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/roof-top-garden.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>Roof Top Garden</h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/av-room.jpg" alt="" />
                                <div className="carousel-caption images-text">
                                    <h3>AV Room</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container" style={{ paddingLeft: "8%", marginTop:"-1px" }}>
                <div className="btn" data-toggle="collapse" data-target="#dropdown2">
                    <img src={Plus} alt="" width="50" />
                    <span type="button" className="location-btn" style={{ paddingLeft: 40 }}>Gallery</span>
                </div>
                <div className="row container-fluid pl-5 pr-5">
                    <div id="dropdown2" className="collapse">
                        <div className="images row container">
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/gallery-2.jpg" width="320" alt="" />
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/gallery-3.jpg" width="320" alt="" />
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="http://godrejproperty.in/godrej-ananda/images/gallery-1.jpg" width="320" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverView
