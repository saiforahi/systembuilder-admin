import React from 'react';
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));

const routes = [
    { path: '/dashboard',exact:true, name: 'Dashboard', component: Dashboard},
    { path: '/dashboard/products',exact:true, name: 'Products', component: React.lazy(()=>import('../pages/products/Products'))},
    { path: '/dashboard/brands',exact:true, name: 'Brands', component: React.lazy(()=>import('../pages/brands/Brands'))},
    { path: '/dashboard/brands/create',exact:true, name: 'Create Brand', component: React.lazy(()=>import('../pages/brands/CreateBrand'))},
    { path: '/dashboard/laptops',exact:true, name: 'Laptops', component: React.lazy(()=>import('../pages/laptops/Laptops'))},
    { path: '/dashboard/laptops/create',exact:true, name: 'Create Laptop', component: React.lazy(()=>import('../pages/laptops/Create'))},
    { path: '/dashboard/laptops/edit/:id',exact:true, name: 'Edit Laptop', component: React.lazy(()=>import('../pages/laptops/Create'))},
    { path: '/dashboard/processors',exact:true, name: 'Processors', component: React.lazy(()=>import('../pages/processors/Processors'))},
    { path: '/dashboard/processors/create',exact:true, name: 'Create Processor', component: React.lazy(()=>import('../pages/processors/Create'))},
    { path: '/dashboard/processors/edit/:id',exact:true, name: 'Edit Processor', component: React.lazy(()=>import('../pages/processors/Edit'))},
    { path: '/dashboard/storages',exact:true, name: 'Storages', component: React.lazy(()=>import('../pages/storages/Storages'))},
    { path: '/dashboard/storages/create',exact:true, name: 'Create Storage', component: React.lazy(()=>import('../pages/storages/Create'))},
    { path: '/dashboard/storages/edit/:id',exact:true, name: 'Edit Storage', component: React.lazy(()=>import('../pages/storages/Edit'))},
    { path: '/dashboard/memories',exact:true, name: 'Memories', component: React.lazy(()=>import('../pages/memories/Memories'))},
    { path: '/dashboard/memories/create',exact:true, name: 'Create Memory', component: React.lazy(()=>import('../pages/memories/Create'))},
    { path: '/dashboard/memories/edit/:id',exact:true, name: 'Edit Memory', component: React.lazy(()=>import('../pages/memories/Edit'))},
    { path: '/dashboard/graphics',exact:true, name: 'Graphics', component: React.lazy(()=>import('../pages/graphics-cards/Cards'))},
    { path: '/dashboard/graphics/create',exact:true, name: 'Create Grpahics Card', component: React.lazy(()=>import('../pages/graphics-cards/Create'))},
    { path: '/dashboard/graphics/edit/:id',exact:true, name: 'Edit Grpahics Card', component: React.lazy(()=>import('../pages/graphics-cards/Edit'))},
    //order
    { path: '/dashboard/orders',exact:true, name: 'Orders', component: React.lazy(()=>import('../pages/orders/Orders'))},
    { path: '/dashboard/orders/create',exact:true, name: 'Create Order', component: React.lazy(()=>import('../pages/orders/Create'))},
    { path: '/dashboard/orders/details/:id',exact:true, name: 'Order Details', component: React.lazy(()=>import('../pages/orders/Details'))},
    //
    { path: '/dashboard/motherboards',exact:true, name: 'Graphics', component: React.lazy(()=>import('../pages/motherboards/Motherboards'))},
    { path: '/dashboard/motherboards/create',exact:true, name: 'Create Grpahics Card', component: React.lazy(()=>import('../pages/motherboards/Create'))},
    { path: '/dashboard/motherboards/edit/:id',exact:true, name: 'Edit Grpahics Card', component: React.lazy(()=>import('../pages/motherboards/Edit'))},
]

export default routes