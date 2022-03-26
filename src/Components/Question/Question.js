import React from "react";
import "./Question.css";
const Question = () => {
	return (
		<div>
			<h3 className="question">
				Difference Between State and props in react??
			</h3>
			<p className="answer">
				In react state and props are two important features.Props are used to
				pass data from one components to another components.whereas state is
				used to represent a parts of website which can change. props is
				immutable that means we cant add,delete,modify values of props but we
				can modify the value of state that means it is immutable. state is local
				to components only.props is the medium of communication between two
				components whereas state is like local data storage which store states
				of variables.
			</p>
			<h3 className="question">How useState works??</h3>
			<p className="answer">
				useState of react is a hook which allows us to store a variable's state
				which may change.when we provide the usestate hook with initial state it
				gives us the current state of variable and a function to modify the
				state.it eases state management.Since it is a hook when it experienced
				that the state changed by the user then its causes react to re-render
				the page and only update the corresponding portion of website.That means
				useState continiously keep eyes on data and waiting when it may
				changed.when changed then re-render the corresponding portion.
			</p>
			<p></p>
		</div>
	);
};

export default Question;
