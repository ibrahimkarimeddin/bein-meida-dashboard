import { ReactNode } from "react";

// Icons Import 
import {  FaHome, FaShoppingCart } from "react-icons/fa"
import { BiSolidCategory } from "react-icons/bi";
import { BiSolidCoupon } from "react-icons/bi";


// Pages Import



// import FooterPage from "./Pages/Footer/Page";
// import AddFooterPage from "./Pages/Footer/View/AddPage";
// import EditFooter  from "./Pages/Footer/View/EditPage";


import HomePage from "./Pages/Home/HomePage";
import CategoryPage from "./Pages/category/CategoryPage";
import DiscountPage from "./Pages/Discount/DiscountPage";
import ProductsPage from "./Pages/Product/ProductsPage";
import ViewProduct from "./Pages/Product/View/Page";
import AddProductPage from "./Pages/Product/View/AddPage";



interface RoutesLinksType {
    name?: string,
    href?: string,
    element?: ReactNode,
    icon?: any,
    Viewelement?: ReactNode,
    Viewhref?: string
    children?: any
    hidden?: boolean
}
export const RoutesLinks: RoutesLinksType[] = [
    {
        name: "Home",
        element: <HomePage />,
        icon: <FaHome />,
        href: "/",
    },
    {
        name: "Category",
        element: <CategoryPage />,
        icon: <BiSolidCategory />,
        href: "/category",
    },
    {
        name: "Item",
        element: <ProductsPage />,
        icon: <FaShoppingCart />,
        href: "/item",
    },
    {
        name: "Discount",
        element: <DiscountPage />,
        icon: <BiSolidCoupon />,
        href: "/discount",
    },


    // hidden routes from sidebar
    {
        name: "addItem",
        element: <AddProductPage />,
        icon: <BiSolidCoupon />,
        href: "/item/add",
        hidden:true
    },
    {
        name: "editItem",
        element: <ViewProduct />,
        icon: <BiSolidCoupon />,
        href: "/item/:id",
        hidden:true
    }

];
