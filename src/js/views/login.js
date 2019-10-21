import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col-4 m-auto border rounded px-3 bg-light">
					<form className="form-signin">
						<img
							className="mb-4"
							src="/docs/4.3/assets/brand/bootstrap-solid.svg"
							alt=""
							width="72"
							height="72"
						/>
						<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
						<label htmlFor="inputEmail" className="sr-only">
							Email address
						</label>
						<input
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required=""
							autoFocus=""
						/>
						<label htmlFor="inputPassword" className="sr-only">
							Password
						</label>
						<input
							type="password"
							id="inputPassword"
							className="form-control mt-1"
							placeholder="Password"
							required=""
						/>
						<div className="checkbox mt-2">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button className="btn btn-lg btn-primary btn-block" type="submit">
							Sign in
						</button>
						<p className="mt-5 mb-3 text-muted">© 2017-2019</p>
					</form>
				</div>
			</div>
		</div>
	);
};
