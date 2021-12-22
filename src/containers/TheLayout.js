import React from 'react'
import { useDispatch } from 'react-redux';

import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import './TheLayout.css'
import { fetchBrandsThunk } from '../store/slices/brandsSlice';
import { fetchLaptopList } from '../store/slices/laptopsSlice';
import { fetchOSThunk } from '../store/slices/osSlice';
import { fetchProcessorsList } from '../store/slices/processorsSlice';
import { fetchStoragesList } from '../store/slices/storagesSlice';
import { fetchMemoriesThunk } from '../store/slices/memoriesSlice';
import { fetchMotherboardsThunk } from '../store/slices/motherboardsSlice';
const TheLayout = () => {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(fetchBrandsThunk())
    dispatch(fetchLaptopList())
    dispatch(fetchOSThunk())
    dispatch(fetchProcessorsList())
    dispatch(fetchStoragesList())
    dispatch(fetchMemoriesThunk())
    dispatch(fetchMotherboardsThunk())
  },[])
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body pt-10 custom-color-c-app">
          <TheContent/>
        </div>
        {/* <TheFooter/> */}
      </div>
    </div>
  )
}

export default TheLayout
