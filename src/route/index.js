import { createRouter, createWebHashHistory } from "vue-router"

const dashboard = () => import("../pages/Dashboard.vue")
const customer_service = () => import("../pages/CustomerService.vue")
const products = () => import("../pages/Products.vue")
const product_price = () => import("../pages/ProductPrice.vue")

const routes = [
    { path: "/", redirect: "/dashboard" },
    {
        path: "/dashboard",
        name: "dashboard",
        component: dashboard
    },
    {
        path: "/customer-service",
        name: "customer-service",
        component: customer_service
    },
    {
        path: "/products",
        name: "products",
        component: products,
    },
    {
        path: "/product-price",
        name: "product-price",
        component: product_price,
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})