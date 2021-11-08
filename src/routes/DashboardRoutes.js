import React from 'react';
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));

const routes = [
    { path: '/dashboard',exact:true, name: 'Dashboard', component: Dashboard},
    { path: '/dashboard/products',exact:true, name: 'Products', component: React.lazy(()=>import('../pages/products/Products'))},
    { path: '/dashboard/brands',exact:true, name: 'Brands', component: React.lazy(()=>import('../pages/brands/Brands'))},
    { path: '/dashboard/brands/create',exact:true, name: 'Create Brand', component: React.lazy(()=>import('../pages/brands/CreateBrand'))},
    { path: '/dashboard/laptops',exact:true, name: 'Laptops', component: React.lazy(()=>import('../pages/laptops/Laptops'))},
    { path: '/dashboard/laptops/create',exact:true, name: 'Create Laptop', component: React.lazy(()=>import('../pages/laptops/Create'))}
]

export default routes