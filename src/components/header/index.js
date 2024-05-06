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
								<a href="/" className="d-inline-block">
									<img src={logo} alt="" className="img-fluid" />
								</a>
							</div>
							<div className="col-10">
								<ul className="nav justify-content-end">
									<li className="nav-item"><a href="/" className="nav-link">Tarangan Solutions</a></li>
									<li className="nav-item"><a href="/" className="nav-link">Tarangan Gadgets</a></li>
									<li className="nav-item"><a href="/" className="nav-link">Hobelf printing</a></li>
									<li className="nav-item"><a href="/" className="nav-link">Software products</a></li>


									<li className="nav-item">
										<div className="dropdown">
											<div className=" dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
												Dedicated Resources
											</div>
											<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
												<li><a className="dropdown-item" href="/resourceLogin">Login</a></li>
												<li><a className="dropdown-item" href="/resourceSignUp">Register</a></li>
											</ul>
										</div>
									</li>
									<li className="nav-item"><a href="/products" className="nav-link">E-Commerce</a></li>
									<li className="nav-item">
										<div className="dropdown">
											<div className=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
												Dropdown button
											</div>
											<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
												<li><a className="dropdown-item" href="/login">Login</a></li>
												<li><a className="dropdown-item" href="/signUp">Register</a></li>
											</ul>
										</div></li>

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