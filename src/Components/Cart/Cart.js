import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SelectedItem from "../SelectedItem/SelectedItem";
import "./Cart.css";
const Cart = (props) => {
	const selectedItems = props.data;
	const resetCart = props.resetCart;
	const handleChoose = props.handleChoose;
	const choosed = props.choosed;
	// console.log(selectedItems);

	return (
		<div className="cart-container">
			<h3>Selected Laptops</h3>
			{selectedItems.map((item) => (
				<SelectedItem data={item}></SelectedItem>
			))}
			<button onClick={handleChoose}>CHOOSE 1 FOR ME</button>
			<button onClick={resetCart}>CHOOSE AGAIN</button>
			<selectedItems data={choosed}></selectedItems>
		</div>
	);
};

export default Cart;
