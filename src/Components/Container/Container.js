import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import "./Container.css";
import dell1 from "../../Images/dell1.jfif";
import Cart from "../Cart/Cart";
const Container = () => {
	const [data, setData] = useState([]);
	const [selected, setSelected] = useState([]);
	useEffect(() => {
		fetch("data.JSON")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	const handleAddToCart = (input) => {
    
		let addToselect = [...selected, input];
		setSelected(addToselect);
	};
	return (
		<div className="container">
			<Items data={data} handleAddToCart={handleAddToCart} key={1}></Items>
			<Cart data={selected}></Cart>
		</div>
	);
};

export default Container;
