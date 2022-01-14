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
import powerSuppliesSlice from './slices/powerSuppliesSlice'
import casingsSlice from './slices/casingsSlice'
import monitorsSlice from './slices/monitorsSlice'
import caseCoolersSlice from './slices/caseCoolersSlice'
import cpucoolersSlice from './slices/cpucoolersSlice'
import miceSlice from './slices/miceSlice'
import keyboardsSlice from './slices/keyboardsSlice'
import prebuildSlice from './slices/prebuildSlice'

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
    motherboards: motherboardsSlice,
    powersupplies: powerSuppliesSlice,
    cases : casingsSlice,
    monitors: monitorsSlice,
    caseCoolers: caseCoolersSlice,
    cpuCoolers: cpucoolersSlice,
    mice:miceSlice,
    keyboards:keyboardsSlice,
    prebuilds:prebuildSlice
  },
})
