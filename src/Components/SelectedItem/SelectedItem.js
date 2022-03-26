import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SelectedItem.css";
const SelectedItem = (props) => {
	const { url, name } = props.data;
	return (
		<div class="cart-item">
			<div className="img-container">
				<img src={url} alt="img" />
			</div>
			<h5>{name}</h5>
			<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
		</div>
	);
};

export default SelectedItem;
