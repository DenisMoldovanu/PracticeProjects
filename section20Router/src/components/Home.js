import {Link, useNavigate } from 'react-router-dom'

function HomePage() {

	const navigate =useNavigate();

	function navigateHandler(){
		navigate('/products')
	}

	return(
		<>
		<h1>My Home page</h1>
		<p>Go to <Link to="/products">list of products</Link> </p>
		<p>
			<button onClick={navigateHandler}> navigate btn</button>
		</p>
		</>
	)
}

export default HomePage;