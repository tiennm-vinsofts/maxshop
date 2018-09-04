import Home from "../pages/HomePage";
import Category from "../pages/CategoriesPage";
import Shop from '../pages/ShopPage';
import Blog from '../pages/BlogPage';
import About from '../pages/AboutPage';
import Error from '../pages/CategoriesPage/404';
import Single from '../pages/ShopPage/ShopSingle';
import BlogPost from '../pages/BlogPage/BlogPost';
import Cart from '../pages/CategoriesPage/Cart';
import Checkout from '../pages/CategoriesPage/Checkout';

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/category',
        component: Category,
        exact: false
    },
    {
        path: '/shop',
        component: Shop,
        exact: false
    },
    {
        path: '/blog',
        component: Blog,
        exact: false
    },
    {
        path: '/about',
        component: About,
        exact: false
    },
    {
        path: '/error',
        component: Error,
        exact: false
    },
    {
        path: '/single',
        component: Single,
        exact:false
    },
    {
        path: '/blog-post',
        component: BlogPost,
        exact:false
    },
    {
        path: '/cart',
        component: Cart,
        exact:false
    },
    {
        path: '/checkout',
        component: Checkout,
        exact:false
    }
];