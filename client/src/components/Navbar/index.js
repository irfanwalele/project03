import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
	return (
		<nav className="navbar navbar-sm navbar-md navbar-lg navbar-light bg-light">
			<Link className="navbar-brand wid68" to="/">
				<img
					className="size50"
					alt="streamLineLogo"
					src={"https://i.ibb.co/cYW1rJ9/Streamline-Logo.png"}
				/>{" "}
				<span className="colum-blue">Streamline</span>
			</Link>
			<div>
				<ul className="navbar-nav">
					<li className="nav-item"></li>
					<li className="nav-item colum-blue">
						<Link
							to="/login"
							className={
								window.location.pathname === "/login"
									? "nav-link active"
									: "nav-link"
							}
						>
							Login/Register
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
