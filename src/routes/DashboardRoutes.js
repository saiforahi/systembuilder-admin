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
    { path: '/dashboard/graphics/edit/:id',exact:true, name: 'Edit Grpahics Card', component: React.lazy(()=>import('../pages/graphics-cards/Edit'))}
]

export default routes