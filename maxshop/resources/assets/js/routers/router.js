import Home from "../pages/HomePage";
import Category from "../pages/CategoriesPage";
import Shop from '../pages/ShopPage';
import Blog from '../pages/BlogPage';
import About from '../pages/AboutPage';

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
    }
];