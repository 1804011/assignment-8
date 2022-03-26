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

	console.log(choosed, selectedItems[0]);

	return (
		<div className="cart-container">
			<h3>Selected Laptops</h3>
			{selectedItems.map((item) => (
				<SelectedItem data={item} flag={0}></SelectedItem>
			))}
			<SelectedItem data={choosed} flag={1}></SelectedItem>
			<button onClick={handleChoose}>CHOOSE 1 FOR ME</button>
			<button onClick={resetCart}>CHOOSE AGAIN</button>
		</div>
	);
};

export default Cart;
