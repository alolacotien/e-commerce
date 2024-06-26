import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../layout/App.tsx";
import AboutPage from "../../features/about/AboutPage.tsx";
import ContactPage from "../../features/contact/ContactPage.tsx";
import HomePage from "../../features/home/HomePage.tsx";
import Catalog from "../../features/catalog";
import ProductDetails from "../../features/catalog/ProductDetails.tsx";
import ServerError from "../Errors/ServerError.tsx";
import NotFound from "../Errors/NotFound.tsx";
import Basketpage from "../../features/Basket/Basketpage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {path:'',element:<HomePage/>},
            {path:'catalog',element:<Catalog/>},
            {path:'catalog/:id',element:<ProductDetails/>},
            {path:'about',element:<AboutPage/>},
            {path:'contact',element:<ContactPage/>},
            {path:'server-error',element:<ServerError/>},
            {path:'not-found', element:<NotFound/>},
            {path:'basket', element: <Basketpage/>},
            {path:'*', element:<Navigate to={'/not-found'}/>},
        ]
    }
])