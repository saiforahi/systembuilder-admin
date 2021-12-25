import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './TheSidebar.css'

import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import { changeState } from '../store/slices/SideBarSlice';
import CIcon from '@coreui/icons-react'
import { has_group } from '../helper';
// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebar.sidebarShow)
  React.useEffect(()=>{
    console.log('has group',has_group('pm'))
  },[])
  return (
    <CSidebar colorScheme="light"
      show={show}
      onShowChange={(val) => dispatch(changeState(val))}
    >
      <CSidebarBrand className="d-md-down-none custom-color" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        /> */}
        <span className="c-sidebar-brand-full name-brand1">System Builder</span>

        {/* <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        <span className="c-sidebar-brand-minimized name-brand1">SB</span>
      </CSidebarBrand>
      <CSidebarNav className="vo-sidebar">
        {/* <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        /> */}
        <hr/>
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard" className="vo-navItem"></CSidebarNavItem>
        {/**Projects */}
        <CSidebarNavDropdown icon="cil-laptop" name="Computers" className="vo-navItem">
          {has_group('admin') && <CSidebarNavItem to="/dashboard/products/create-new-product" name="Add New Product" className="vo-navItem" ></CSidebarNavItem>}
          <CSidebarNavItem to="/dashboard/products" name="All Products" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/laptops" name="Laptops" className="vo-navItem"></CSidebarNavItem>
          
          {/* <CSidebarNavItem to="/dashboard/Projects/completed-projects" name="Completed Projects" className="vo-navItem" ></CSidebarNavItem> */}
        </CSidebarNavDropdown>
        {/**Meetings */}
        {/* <CSidebarNavItem to="/dashboard/meetings" icon="cil-view-module" name="Basic Data" className="vo-navItem"></CSidebarNavItem> */}
        {/**WBS */}
        
        <CSidebarNavDropdown icon="cib-ghost" name="Components" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/processors" name="Processors" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/storages" name="Storages" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/memories" name="Memories" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/graphics" name="Graphics Cards" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/motherboards" name="Mother Boards" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/powersupplies" name="Power Supplies" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/monitors" name="Monitors" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/cpucases" name="CPU Case" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/cpu-coolers" name="CPU Cooler" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/case-coolers" name="Case Cooler" className="vo-navItem"></CSidebarNavItem>
        </CSidebarNavDropdown>
        <CSidebarNavDropdown icon="cib-ghost" name="Accessories" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/headphones" name="Head Phones" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/speakers" name="Speakers" className="vo-navItem"></CSidebarNavItem>
        </CSidebarNavDropdown>
        <CSidebarNavDropdown icon="cil-spreadsheet" name="Basic Data" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/brands" name="Brands" className="vo-navItem"  ></CSidebarNavItem>
          {/* <CSidebarNavItem to="/dashboard/WBS/board" name="Board" className="vo-navItem" ></CSidebarNavItem> */}
        </CSidebarNavDropdown>
        <hr/>
        {/* <CSidebarNavDivider/> */}
        <CSidebarNavDropdown icon="cil-spreadsheet" name="Orders" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/orders" name="List" className="vo-navItem"  ></CSidebarNavItem>
          {/* <CSidebarNavItem to="/dashboard/WBS/board" name="Board" className="vo-navItem" ></CSidebarNavItem> */}
        </CSidebarNavDropdown>
        <CSidebarNavItem icon="cil-spreadsheet" to="/dashboard/sales" name="Sales" className="vo-navItem"  ></CSidebarNavItem>
        <CSidebarNavDropdown icon="cil-settings" name="Settings" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/headphones" name="Mail Box" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/speakers" name="Maintenence" className="vo-navItem"></CSidebarNavItem>
        </CSidebarNavDropdown>

      </CSidebarNav>
      <CSidebarMinimizer />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
