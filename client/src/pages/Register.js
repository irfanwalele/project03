import React from "react";
import Hero from "../components/Hero";
// import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Register() {
	return (
		<div class="row mt-5">
			<div class="col-md-6 m-auto">
				<div class="card card-body">
					<h1 class="text-center mb-3">
						<i class="fas fa-sign-in-alt"></i> Register
					</h1>
					{/* <% include ./partials/messages %> */}
					<form action="/users/register" method="POST">
						<div class="form-group">
							<label for="fistName">First Name</label>
							<br></br>
							<input
								type="text"
								id="text"
								name="firstName"
								class="form-controls"
								placeholder="John"
							/>
						</div>
						<div class="form-group">
							<label for="lastName">Last Name</label>
							<br></br>
							<input
								type="text"
								id="text"
								name="lastName"
								class="form-controls"
								placeholder="Smith"
							/>
						</div>
						<div class="form-group">
							<label for="email">Email</label>
							<br></br>
							<input
								type="email"
								id="email"
								name="email"
								class="form-controls"
								placeholder="johnsmith@gmail.com"
							/>
						</div>
						<div class="form-group">
							<label for="passWord">Password</label>
							<br></br>
							<input
								type="text"
								id="text"
								name="passWord"
								class="form-controls"
								placeholder="******"
							/>
						</div>
						<div class="form-group">
							<label for="passWord">Confirm Password</label>
							<br></br>
							<input
								type="text"
								id="text"
								name="passWord"
								class="form-controls"
								placeholder="******"
							/>
						</div>
						<br></br>
						<button type="submit" class="btn btn-primary btn-block">
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
