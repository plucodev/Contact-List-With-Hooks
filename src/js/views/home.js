import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<Link to={"/contacts/" + "local"} className="btn btn-success">
			Go to Local Contact List
		</Link>
		<Link to={"/contacts/" + "api"} className="btn btn-success">
			Go to API Contact List
		</Link>
	</div>
);
