import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './components/Home';
import ProductPage from './components/Products';
import RootLayot from './components/Root';
import ErrorPage from './components/Error';

const router = createBrowserRouter([
  { 
    path:'/',
    element: <RootLayot/>,  
    errorElement: <ErrorPage/>,
    children:[
      {path: '/', element: <HomePage/> },
      {path: '/products', element: <ProductPage/> },
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
