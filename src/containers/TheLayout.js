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
const TheLayout = () => {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(fetchBrandsThunk())
    dispatch(fetchLaptopList())
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
