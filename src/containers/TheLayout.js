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
import { fetchCasingsThunk } from '../store/slices/casingsSlice';
import { fetchMonitorsThunk } from '../store/slices/monitorsSlice';
import { fetchCPUcoolersThunk } from '../store/slices/cpucoolersSlice';
import { fetchCaseCoolersThunk } from '../store/slices/caseCoolersSlice';
import {fetchKeyboardsThunk} from '../store/slices/keyboardsSlice'
import {fetchMiceThunk} from '../store/slices/miceSlice'
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
    dispatch(fetchCasingsThunk())
    dispatch(fetchMonitorsThunk())
    dispatch(fetchCPUcoolersThunk())
    dispatch(fetchCaseCoolersThunk())
    dispatch(fetchKeyboardsThunk())
    dispatch(fetchMiceThunk())
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
