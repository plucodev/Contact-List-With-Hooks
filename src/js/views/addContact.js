import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";

import "../../styles/demo.scss";

export const AddContact = () => {
	const [name, setName] = useState("Paolo");
	const [email, setEmail] = useState(null);
	const [phone, setPhone] = useState(null);
	const [address, setAddress] = useState(null);

	// THIS IS ONE WAY TO USE ONCHANGE EVENT
	// YOU DEFINE HERE THE METHOD AND YOU CALL IN THE NAME INPUT
	function handleNameChange(e) {
		setName(e.target.value);
	}
	// THIS IS ONE WAY TO USE ONCHANGE EVENT
	// IN THIS CASE WE ARE USING AN ARROW FUNCTION AND WE ARE CALLING IT IN THE EMAIL INPUT
	const handleEmailChange = e => {
		setEmail(e.target.value);
	};
	function method(store) {
		console.log("store:", store);
	}
	return (
		<Consumer>
			{({ store, actions }) => {
				return (
					<div className="container">
						<div>
							<h1 className="text-center mt-5">Add a new contact</h1>
							<form>
								<div className="form-group">
									<label>Full Name</label>
									<input
										value={name}
										onChange={handleNameChange}
										type="text"
										className="form-control"
										placeholder="Full Name"
									/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input
										value={email}
										onChange={handleEmailChange}
										type="email"
										className="form-control"
										placeholder="Enter email"
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										value={address}
										// THIS IS ANOTHER WAY
										// IN THIS CASE WE JUST USE 1 LINE TO HAVE THE SAME RESULT
										onChange={e => setAddress(e.target.value)}
										type="text"
										className="form-control"
										placeholder="Enter address"
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										value={phone}
										onChange={e => setPhone(e.target.value)}
										type="text"
										className="form-control"
										placeholder="Enter phone"
									/>
								</div>
								<button
									//onClick={test}
									onClick={() => actions.addANewContact(name, email, address, phone, "store")}
									type="button"
									className="btn btn-primary mr-3">
									Store
								</button>
								<button
									//onClick={test}
									onClick={() => actions.addANewContact(name, email, address, phone, "api")}
									type="button"
									className="btn btn-info mr-3 ">
									API
								</button>
								<Link className="mt-3 w-100 text-center" to="/">
									or get back to contacts
								</Link>
							</form>
						</div>
					</div>
				);
			}}
		</Consumer>
	);
};
