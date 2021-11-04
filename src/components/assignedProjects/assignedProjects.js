import React, { useState } from 'react';
import { CButton, CCard, CCardBody,CAlert } from '@coreui/react';
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { fetchUserWiseWbsThunk } from '../../store/slices/WbsSlice';
import { USER_ID } from "../../Config";
const AssignedProjectsDashboard = () => {
    const dispatch = useDispatch()
    const wbs = useSelector(state => state.wbs.data);
    React.useEffect(() => {
        dispatch(fetchUserWiseWbsThunk(localStorage.getItem(USER_ID)))
    }, [])
    return (
        <>

            <div className="main-holder-projects">
                <h3 className="projectsHeader">
                    Assigned to me
                </h3>

                <div className="card-holder1">
                    {wbs!=undefined && wbs.slice(0, 3).map((item, idx) => (
                        <CCard className="project-card1">
                            <CCardBody>
                                <h6 className="id-no1">project id: #{item.project.work_package_number}</h6>
                                <h5 className="card-details1"><span className="p-header-3">Task Title:</span> {item.project.task_title}</h5>
                                <h5 className="card-details1"><span className="p-header-3">Due Date :</span> {item.project.planned_delivery_date}</h5>
                            </CCardBody>

                        </CCard>
                    ))}
                              { /**If no wbs */}
 {wbs==undefined? (
                        
                       
                             
                        <CAlert className="no-value-show-alert"  color="primary">Currently there are no projects assigned to you</CAlert>     
                      
                
              ):null
              
              
              }
                </div>
                {wbs!=undefined && wbs.length>3 && <div className="button-holder3"><CButton className="tiny-buttons1">View all</CButton></div>}
            </div>

        </>
    )
}
export default AssignedProjectsDashboard;
