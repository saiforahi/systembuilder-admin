import { configureStore } from '@reduxjs/toolkit'
import ConfigSlice from './slices/ConfigSlice'
import DrawerSlice from './slices/DrawerSlice'
import profileSlice from './slices/ProfileSlice'
import SidebarSlice from './slices/SideBarSlice'
import brandsSlice from './slices/brandsSlice'
import laptopsSlice from './slices/laptopsSlice'
import osSlice from './slices/osSlice'
import processorsSlice from './slices/processorsSlice'
import storagesSlice from './slices/storagesSlice'
import memoriesSlice from './slices/memoriesSlice'
import graphicsCardsSlice from './slices/graphicsCardsSlice'
import ordersSlice from './slices/ordersSlice'
import motherboardsSlice from './slices/motherboardsSlice'

export default configureStore({
  reducer: {
    drawer: DrawerSlice,
    config: ConfigSlice,
    sidebar: SidebarSlice,
    brands: brandsSlice,
    profile:profileSlice,
    laptops:laptopsSlice,
    processors: processorsSlice,
    os: osSlice,
    storages:storagesSlice,
    memories:memoriesSlice,
    graphics: graphicsCardsSlice,
    orders: ordersSlice,
    motherboards: motherboardsSlice
  },
})
