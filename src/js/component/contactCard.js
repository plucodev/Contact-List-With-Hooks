import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/demo.scss";

export const ContactCard = props => {
	function method(store) {
		console.log("store:", store);
	}
	return props.type === "local" ? (
		<div className="container">
			<Consumer>
				{({ store, actions }) => {
					method(store);

					return store.localContacts.map((item, index) => {
						return (
							<li key={index} className="list-group-item border border-success rounded mb-2">
								<div className="row w-100">
									<div className="col-12 col-sm-6 col-md-3 px-0">
										<img
											src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
											alt="Mike Anamendolla"
											className="rounded-circle mx-auto d-block img-fluid"
										/>
									</div>
									<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
										<div className=" float-right">
											<Link to={"/edit-contact/" + index}>
												<button className="btn">
													<i className="fas fa-pencil-alt mr-3" />
												</button>
											</Link>
											<button className="btn" onClick={() => actions.deleteContact(item.id)}>
												<i className="fas fa-trash-alt" />
											</button>
										</div>
										<label className="name lead">{item.name}</label>
										<br />
										<i className="fas fa-map-marker-alt text-muted mr-3" />
										<span className="text-muted">{item.address}</span>
										<br />
										<span
											className="fa fa-phone fa-fw text-muted mr-3"
											data-toggle="tooltip"
											title=""
											data-original-title="(870) 288-4149"
										/>
										<span className="text-muted small">{item.phone}</span>
										<br />
										<span
											className="fa fa-envelope fa-fw text-muted mr-3"
											data-toggle="tooltip"
											data-original-title=""
											title=""
										/>
										<span className="text-muted small text-truncate">{item.email}</span>
									</div>
								</div>
							</li>
						);
					});
				}}
			</Consumer>
		</div>
	) : (
		<div className="container">
			<Consumer>
				{({ store, actions }) => {
					method(store);

					return store.apiContacts[0] ? (
						store.apiContacts.map((item, index) => {
							return (
								<li key={index} className="list-group-item border border-success rounded mb-2">
									<div className="row w-100">
										<div className="col-12 col-sm-6 col-md-3 px-0">
											<img
												src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
												alt="Mike Anamendolla"
												className="rounded-circle mx-auto d-block img-fluid"
											/>
										</div>
										<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
											<div className=" float-right">
												<Link to={"/edit-contact/" + item.id}>
													<button className="btn">
														<i className="fas fa-pencil-alt mr-3" />
													</button>
												</Link>
												<button className="btn" onClick={() => actions.deleteContact(item.id)}>
													<i className="fas fa-trash-alt" />
												</button>
											</div>
											<label className="name lead">{item.full_name}</label>
											<br />
											<i className="fas fa-map-marker-alt text-muted mr-3" />
											<span className="text-muted">{item.address}</span>
											<br />
											<span
												className="fa fa-phone fa-fw text-muted mr-3"
												data-toggle="tooltip"
												title=""
												data-original-title="(870) 288-4149"
											/>
											<span className="text-muted small">{item.phone}</span>
											<br />
											<span
												className="fa fa-envelope fa-fw text-muted mr-3"
												data-toggle="tooltip"
												data-original-title=""
												title=""
											/>
											<span className="text-muted small text-truncate">{item.email}</span>
										</div>
									</div>
								</li>
							);
						})
					) : (
						<div>There are no contacts yet.</div>
					);
				}}
			</Consumer>
		</div>
	);
};
ContactCard.propTypes = {
	type: PropTypes.string
};
