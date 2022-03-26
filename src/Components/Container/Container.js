import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import "./Container.css";
import dell1 from "../../Images/dell1.jfif";
import Cart from "../Cart/Cart";
import SelectedItem from "../SelectedItem/SelectedItem";
const Container = () => {
	const [data, setData] = useState([]);
	const [selected, setSelected] = useState([]);
	const [choosed, setChoosed] = useState({});
	useEffect(() => {
		fetch("data.JSON")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	const handleAddToCart = (input) => {
		if (selected.length < 4) {
			let addToselect = [...selected, input];
			setSelected(addToselect);
		}
	};
	const resetCart = () => {
		setSelected([]);
		setChoosed({});
	};
	const handleChoose = () => {
		if (selected.length > 0) {
			let random = parseInt(Math.random() * 100) % selected.length;
			console.log(random);
			setChoosed(selected[random]);
		}
	};
	return (
		<div className="container">
			<Items data={data} handleAddToCart={handleAddToCart} key={1}></Items>
			<Cart
				data={selected}
				resetCart={resetCart}
				handleChoose={handleChoose}
				choosed={choosed}
			></Cart>
		</div>
	);
};

export default Container;
