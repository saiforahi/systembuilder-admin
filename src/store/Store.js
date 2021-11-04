import { configureStore } from '@reduxjs/toolkit'
import ConfigSlice from './slices/ConfigSlice'
import DrawerSlice from './slices/DrawerSlice'
import ProfileSlice from './slices/ProfileSlice'
import SidebarSlice from './slices/SideBarSlice'
import brandsSlice from './slices/brandsSlice'

export default configureStore({
  reducer: {
    drawer: DrawerSlice,
    config: ConfigSlice,
    sidebar: SidebarSlice,
    brands: brandsSlice,
    profile:ProfileSlice,
  },
})
