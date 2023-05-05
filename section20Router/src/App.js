import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './components/Home';
import ProductPage from './components/Products';
import RootLayot from './components/Root';
import ErrorPage from './components/Error';
import ProductDetailPage from './components/ProductDetailPage';

const router = createBrowserRouter([
  { 
    path:'/',
    element: <RootLayot/>,  
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <HomePage/> },
      {path: '/products', element: <ProductPage/> },
      {path: '/products/:productId', element: <ProductDetailPage/> },
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
