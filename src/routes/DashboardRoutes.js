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
    //sales
    { path: '/dashboard/sales',exact:true, name: 'Orders', component: React.lazy(()=>import('../pages/sales/Sales'))},
    
    //motherboard
    { path: '/dashboard/motherboards',exact:true, name: 'Graphics', component: React.lazy(()=>import('../pages/motherboards/Motherboards'))},
    { path: '/dashboard/motherboards/create',exact:true, name: 'Create Grpahics Card', component: React.lazy(()=>import('../pages/motherboards/Create'))},
    { path: '/dashboard/motherboards/edit/:id',exact:true, name: 'Edit Grpahics Card', component: React.lazy(()=>import('../pages/motherboards/Edit'))},

    //power supplies
    { path: '/dashboard/powersupplies',exact:true, name: 'Power Supplies', component: React.lazy(()=>import('../pages/powersupplies/PowerSupplies'))},
    { path: '/dashboard/powersupplies/create',exact:true, name: 'Create Power Supply', component: React.lazy(()=>import('../pages/powersupplies/Create'))},
    { path: '/dashboard/powersupplies/edit/:id',exact:true, name: 'Edit Power Supply', component: React.lazy(()=>import('../pages/powersupplies/Edit'))},

    //power supplies
    { path: '/dashboard/cpucases',exact:true, name: 'CPU Casings', component: React.lazy(()=>import('../pages/casings/Casings'))},
    { path: '/dashboard/cpucases/create',exact:true, name: 'Create CPU Case', component: React.lazy(()=>import('../pages/casings/Create'))},
    { path: '/dashboard/cpucases/edit/:id',exact:true, name: 'Edit CPU Case', component: React.lazy(()=>import('../pages/casings/Edit'))},

    //monitors
    { path: '/dashboard/monitors',exact:true, name: 'Monitors', component: React.lazy(()=>import('../pages/monitors/Monitors'))},
    { path: '/dashboard/monitors/create',exact:true, name: 'Monitor create', component: React.lazy(()=>import('../pages/monitors/Create'))},
    { path: '/dashboard/monitors/edit/:id',exact:true, name: 'Edit Monitor', component: React.lazy(()=>import('../pages/monitors/Edit'))},

    //case-coolers
    { path: '/dashboard/case-coolers',exact:true, name: 'Case Coolers', component: React.lazy(()=>import('../pages/case-coolers/CaseCoolers'))},
    { path: '/dashboard/case-coolers/create',exact:true, name: 'Case Cooler create', component: React.lazy(()=>import('../pages/case-coolers/Create'))},
    { path: '/dashboard/case-coolers/edit/:id',exact:true, name: 'Edit Case Cooler', component: React.lazy(()=>import('../pages/case-coolers/Edit'))},

    //cpu-coolers
    { path: '/dashboard/cpu-coolers',exact:true, name: 'CPU Coolers', component: React.lazy(()=>import('../pages/cpu-coolers/CpuCoolers'))},
    { path: '/dashboard/cpu-coolers/create',exact:true, name: 'CPU Cooler create', component: React.lazy(()=>import('../pages/cpu-coolers/Create'))},
    { path: '/dashboard/cpu-coolers/edit/:id',exact:true, name: 'Edit CPU Cooler', component: React.lazy(()=>import('../pages/cpu-coolers/Edit'))},
]

export default routes