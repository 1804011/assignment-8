import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Cart.css";
const Cart = (props) => {
	const selectedItems = props.data;
	// console.log(selectedItems);

	return (
		<div className="cart-container">
			<h3>Selected Laptops</h3>
			{selectedItems.map((item) => (
				<SelectedItem data={item}></SelectedItem>
			))}
			<button>CHOOSE 1 FOR ME</button>
			<button>CHOOSE AGAIN</button>
		</div>
	);
};
function SelectedItem(props) {
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
}
export default Cart;
