import React from "react";
import { cart, logo } from "../../images";

const Header = () => {
	return (
		<>
			<header>
				<div className="top-header">
					<div className="container">
						<div className="row">
							<div className="col">
								<ul className="nav justify-content-end">
									<li className="nav-item"><a href="mailto:info@nakshatratechnohub.com" className="nav-link">info@nakshatratechnohub.com</a></li>
									<li className="nav-item"><a href="tel:+91 8482925926" className="nav-link">+91 8482925926</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="main-header">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-2">
								<a href="" className="d-inline-block">
									<img src={logo} alt="" className="img-fluid" />
								</a>
							</div>
							<div className="col-10">
								<ul className="nav justify-content-end">
									<li className="nav-item"><a href="" className="nav-link">Nakshatra Technohub</a></li>
									<li className="nav-item"><a href="" className="nav-link">Nakshatra Creation</a></li>
									<li className="nav-item"><a href="" className="nav-link">MAK Industries</a></li>
									<li className="nav-item"><a href="" className="nav-link">Nakshatra Technology</a></li>
									<li className="nav-item"><a href="" className="nav-link">StayHappy</a></li>
									{/* <li className="nav-item"><a href="" className="nav-link"><img src={cart} alt="" className="img-fluid"/></a></li> */}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header