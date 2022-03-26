import logo from "./logo.svg";
import "./App.css";
import Container from "./Components/Container/Container";
import Question from "./Components/Question/Question";
function App() {
	return (
		<div>
			<h1 className="header">Buy Your Favourite Laptop</h1>
			<p className="subtitle">Choose 4 laptop you like</p>
			<Container></Container>
			<Question></Question>
		</div>
	);
}

export default App;
