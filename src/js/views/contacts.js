import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";
import { ContactCard } from "../component/contactCard";
import "../../styles/demo.scss";
import PropTypes from "prop-types";

export const Contacts = props => {
	console.log("match", props.match.params.type);
	function method(store) {
		console.log("store:", store);
	}

	return props.match.params.type === "local" ? (
		<>
			<div className="container">
				<div className="row justify-content-center border rounded py-3">
					<h1>Contact List Local</h1>
				</div>
				<div className="row">
					<div className="col-12 ">
						<div className="row">
							<div className="col-10 px-0 m-auto ">
								<ul className="pl-0 mb-0">
									<ContactCard type="local" />
								</ul>
							</div>
						</div>
						<div className="row justify-content-center mt-3">
							<Link to="/add-contact">
								<button type="button" className="btn btn-outline-info">
									Add Contact
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	) : (
		<>
			<div className="container">
				<div className="row justify-content-center border rounded py-3">
					<h1>Contact List API</h1>
				</div>
				<div className="row">
					<div className="col-12 ">
						<div className="row">
							<div className="col-10 px-0 m-auto ">
								<ul className="pl-0 mb-0">
									<ContactCard type="api" />
								</ul>
							</div>
						</div>
						<div className="row justify-content-center mt-3">
							<Link to="/add-contact">
								<button type="button" className="btn btn-outline-info">
									Add Contact
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
Contacts.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
