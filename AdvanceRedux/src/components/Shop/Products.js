import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'my book',
    description: 'my best book'
  },
  {
    id: 'p2',
    price: 10,
    title: 'my second book',
    description: 'my second best book'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title = {product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
