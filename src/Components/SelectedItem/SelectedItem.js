import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SelectedItem.css";
const SelectedItem = (props) => {
	const { url, name } = props.data;
	const flag = props.flag;
	console.log(url);

	if (flag == 1 && url) {
		return (
			<div>
				<h3>Choosed for you</h3>
				<div class="cart-item">
					<div className="img-container">
						<img src={url} alt="img" />
					</div>
					<h5>{name}</h5>
					<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
				</div>
			</div>
		);
	} else if (flag == 0) {
		return (
			<div class="cart-item">
				<div className="img-container">
					<img src={url} alt="img" />
				</div>
				<h5>{name}</h5>
				<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
			</div>
		);
	} else return <div></div>;
};

export default SelectedItem;
