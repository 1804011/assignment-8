import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import "./Container.css";
import dell1 from "../../Images/dell1.jfif";
const Container = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("data.JSON")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div className="container">
			<Items data={data} key={1}></Items>
		</div>
	);
};

export default Container;
