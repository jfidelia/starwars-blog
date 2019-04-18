import React from "react";
import { Context } from "../store/appContext.jsx";

export class Card extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.characters.map((item, index) => {
						return (
							<div className="card" key={index}>
								<img
									src="#"
									className="card-img-top"
									alt="Card Image Cap"
								/>
								<div className="card-body">
									<h1>{item.name}</h1>
									<h5 className="card-title">
										{item.gender}
									</h5>
									<p className="card-text">
										{item.eye_color}
									</p>
									<p className="card-text">
										{item.hair_color}
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
								<div className="card-body">
									<h1>{item.name}</h1>
									<h5 className="card-title">
										{item.gender}
									</h5>
									<p className="card-text">
										{item.eye_color}
									</p>
									<p className="card-text">
										{item.hair_color}
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
