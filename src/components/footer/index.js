import React from "react";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="main-footer">
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-sm-6">
								<div className="first-nav">
									<ul className="nav flex-column">
										<h3>
											Nakshatra Technohub (India) Pvt. Ltd.
										</h3>
										<li className="nav-items"><a href="/aboutus" className="nav-link">About us</a></li>
										<li className="nav-items"><a href="/contactus" className="nav-link">Careers</a></li>
										<li className="nav-items"><a href="" className="nav-link">Contact us</a></li>
										<li className="nav-items"><a href="" className="nav-link">Blog</a></li>
									</ul>
								</div>

								<div className="second-nav">
									<ul className="nav flex-column">
										<h3>
											Site Policies
										</h3>
										<li className="nav-items"><a href="" className="nav-link">Privacy Policy</a></li>
										<li className="nav-items"><a href="" className="nav-link">Refund and Returns Policy</a></li>
										<li className="nav-items"><a href="" className="nav-link">Terms and Conditions</a></li>
										<li className="nav-items"><a href="" className="nav-link">Shipping</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="first-nav">
									<ul className="nav flex-column">
										<h3>
											Contact Info
										</h3>
										<li className="nav-items"><a href="mailto:info@nakshatratechnohub.com" className="nav-link">info@nakshatratechnohub.com</a></li>
										<li className="nav-items"><a href="tel:+91 8482925926" className="nav-link">+91 8482925926</a></li>
										<li className="nav-items"><a href="" className="nav-link">Address: F-89, MIDC, Ambad, Nashik - 422010, Maharashtra</a></li>
									</ul>
								</div>

								<div className="second-nav">
									<ul className="nav">
										<li className="nav-items"></li>
										<li className="nav-items"></li>
										<li className="nav-items"></li>
									</ul>
								</div>
							</div>

							<div className="col-md-4 col-sm-6">
								<form>
									<h3>Reach out to Us</h3>
									<div className="form-group mb-2">
										<input type="text" className="form-control" placeholder="Name" />
									</div>

									<div className="form-group mb-2">
										<input type="email" className="form-control" placeholder="Email" />
									</div>

									<div className="form-group mb-2">
										<input type="number" className="form-control" placeholder="Phone" />
									</div>

									<div className="form-group mb-2">
										<textarea className="form-control" placeholder="Message" rows={4} />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="copyright">
					<div className="container">
						<div className="row">
							<div className="col">
								<p className="text-center">&copy; Nakshatra Technohub 2023. All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer