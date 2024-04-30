import React from "react";
import { logo } from "../../images";

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
									<li className="nav-item"><a href="" className="nav-link">Tarangan Solutions</a></li>
									<li className="nav-item"><a href="" className="nav-link">Tarangan Gadgets</a></li>
									<li className="nav-item"><a href="" className="nav-link">Hobelf printing</a></li>
									<li className="nav-item"><a href="" className="nav-link">Software products</a></li>
									<li className="nav-item"><a href="" className="nav-link">Dedicated Resources</a></li>
									<li className="nav-item"><a href="" className="nav-link">E-Commerce</a></li>
									{/* <li className="nav-item"><a href="" className="nav-link"><img src={cart} alt="" className="img-fluid"/></a></li> */}
									<div class="dropdown">
										<button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
											Dropdown button
										</button>
										<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
											<li><a class="dropdown-item" href="/login">Login</a></li>
											<li><a class="dropdown-item" href="/signUp">Register</a></li>
										</ul>
									</div>
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