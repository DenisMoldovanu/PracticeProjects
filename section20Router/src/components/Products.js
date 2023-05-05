import { Link } from "react-router-dom";

const Products = [
	{id:'p1', title: 'Product 1'},
	{id:'p2', title: 'Product 2'},
	{id:'p3', title: 'Product 3'},
]

function ProductPage() {
	return(
		<>
		<h1>Product page</h1>
		<ul>
			{Products.map(product => <li key={product.id}><Link to ={`/products/${product.id}`} >{product.title}</Link></li>)}
		</ul>
		</>
	) 
  }
  
  export default ProductPage;