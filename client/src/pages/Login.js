import React from "react";
import Hero from "../components/Hero";
// import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Login() {
	return (
		<div class="row mt-5">
			<div class="col-md-6 m-auto">
				<div class="card card-body">
					<h1 class="text-center mb-3">
						<i class="fas fa-sign-in-alt"></i> Login
					</h1>
					{/* <% include ./partials/messages %> */}
					<form action="/users/login" method="POST">
						<div class="form-group">
							<label for="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								class="form-controls"
								placeholder="Enter Email"
							/>
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								class="form-controls"
								placeholder="Enter Password"
							/>
						</div>
						<br></br>
						<button type="submit" class="btn btn-primary btn-block">
							Login
						</button>
					</form>
					<p class="lead mt-4">
						No Account? <a href="/users/register">Register</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
