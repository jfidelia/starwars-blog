import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Card />
			</div>
		);
	}
}
