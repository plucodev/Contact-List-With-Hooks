import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/demo.scss";

export const EditContact = props => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();
	const { store, actions } = useContext(Context);

	// THIS IS ONE WAY TO USE ONCHANGE EVENT
	// YOU DEFINE HERE THE METHOD AND YOU CALL IN THE NAME INPUT
	const handleNameChange = e => {
		setName(e.target.value);
	};
	// THIS IS ONE WAY TO USE ONCHANGE EVENT
	// IN THIS CASE WE ARE USING AN ARROW FUNCTION AND WE ARE CALLING IT IN THE EMAIL INPUT
	const handleEmailChange = e => {
		setEmail(e.target.value);
	};
	function method() {
		console.log("store:", { store });
	}

	let thisContact = props.match.params.theindex;
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit a contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							value={name}
							{...name}
							onChange={handleNameChange}
							type="text"
							className="form-control"
							placeholder="Full Name"
							defaultValue={store.localContacts[thisContact].name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							value={email}
							type="email"
							onChange={handleEmailChange}
							className="form-control"
							placeholder="Enter email"
							defaultValue={store.localContacts[thisContact].email}
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
							defaultValue={store.localContacts[thisContact].address}
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
							defaultValue={store.localContacts[thisContact].phone}
						/>
					</div>
					<button
						//onClick={test}
						onClick={() => actions.editContact(name, email, address, phone, "store", thisContact)}
						type="button"
						className="btn btn-primary mr-3">
						Store
					</button>
					<button
						//onClick={test}
						// onClick={() =>
						// 	actions.editContact(name, email, address, phone, "api", props.history)
						// }
						onClick={method}
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
};
EditContact.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
