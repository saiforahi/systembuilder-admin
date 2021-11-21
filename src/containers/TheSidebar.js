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
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard" className="vo-navItem"></CSidebarNavItem>
        {/**Projects */}
        <CSidebarNavDropdown icon="cib-ghost" name="Products" className="vo-navItem">
          {has_group('admin') && <CSidebarNavItem to="/dashboard/products/create-new-product" name="Add New Product" className="vo-navItem" ></CSidebarNavItem>}
          <CSidebarNavItem to="/dashboard/products" name="All Products" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/laptops" name="Laptops" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/processors" name="Processors" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/storages" name="Storages" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/memories" name="Memories" className="vo-navItem"></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/motherboards" name="Mother Boards" className="vo-navItem" disabled></CSidebarNavItem>
          {/* <CSidebarNavItem to="/dashboard/Projects/completed-projects" name="Completed Projects" className="vo-navItem" ></CSidebarNavItem> */}



        </CSidebarNavDropdown>
        {/**Meetings */}
        {/* <CSidebarNavItem to="/dashboard/meetings" icon="cil-view-module" name="Basic Data" className="vo-navItem"></CSidebarNavItem> */}
        {/**WBS */}
        <CSidebarNavDropdown icon="cil-spreadsheet" name="Basic Data" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/brands" name="Brands" className="vo-navItem"  ></CSidebarNavItem>
          {/* <CSidebarNavItem to="/dashboard/WBS/board" name="Board" className="vo-navItem" ></CSidebarNavItem> */}

        </CSidebarNavDropdown>
        {/**EVMS */}
        {/* <CSidebarNavItem to="/dashboard/EVMS"name="EVMS" icon="cil-chart-line" className="vo-navItem"></CSidebarNavItem> */}
        {/* {has_group('admin') && <CSidebarNavDropdown icon="cil-chart-line" name="EVMS" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/EVMS/create" name="Create EVMS" className="vo-navItem"  ></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/EVMS/view" name="View EVMS" className="vo-navItem" ></CSidebarNavItem>
        </CSidebarNavDropdown>} */}
        {/* *Profile
        <CSidebarNavItem to="/dashboard/profile" name="Profile" icon="cil-user" className="vo-navItem"></CSidebarNavItem>

        {/**Timecards */}
        {/* <CSidebarNavItem to="/dashboard/timecards" name="Timecards" icon="cil-library" className="vo-navItem"></CSidebarNavItem> */}

        {/**Shared Docs */}
        {/* <CSidebarNavItem to="/dashboard/shared-documents" name="Shared Documents" icon="cil-folder-open" className="vo-navItem"></CSidebarNavItem> */}

      </CSidebarNav>
      <CSidebarMinimizer />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
