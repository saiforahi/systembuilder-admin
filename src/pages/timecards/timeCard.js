import { CContainer, CRow, CCol, CForm, CLabel, CInput, CButton,CDataTable } from '@coreui/react';
import React, { useState } from 'react'
import "./timeCards.css"
import Select from "react-select";
const TimeCards = () => {
    const colourStyles = {
        // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
        option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
    };
    const options = [
        { value: "1", label: "Kibria Papel" },
        { value: "2", label: "Pial Noman" },
        { value: "3", label: "Saif Azad" },
        { value: "4", label: "Fahmida Sharmin Pranto" },
    ];
    const handleChange = (field, value) => {
        switch (field) {
            case "options":
                setProjectValue(value);
                break;
            default:
                break;
        }
    };
    const [projectValue, setProjectValue] = useState("");
    const usersData=[
        {id: 0, actual_work_done: 'John Doe', dateCreated: '2018/01/01',dateUpdated: '2018/01/01', timeCardAssigneeID: 'Guest', projectName: 'Pending',hrsToday:'6',wbsID:'893'},
        {id: 1, actual_work_done: 'Samppa Nori', dateCreated: '2018/01/01',dateUpdated:'2018/01/01', timeCardAssigneeID: 'Member', projectName: 'Active',hrsToday:'6',wbsID:'893'},
        {id: 2, actual_work_done: 'Estavan Lykos', dateCreated: '2018/01/01',dateUpated: '2018/01/01', timeCardAssigneeID: 'Staff', projectName: 'Banned',hrsToday:'6',wbsID:'893'},
        {id: 3, actual_work_done: 'Chetan Mohamed', dateCreated: '2018/02/01',dateUpdated: '2018/01/01', timeCardAssigneeID: 'Admin', projectName: 'Inactive',hrsToday:'6',wbsID:'893'},
        {id: 4, actual_work_done: 'Derick Maximinus', dateCreated: '2018/03/01',dateUpdated:'2018/01/01', timeCardAssigneeID: 'Member', projectName: 'Pending',hrsToday:'6',wbsID:'893'},
        {id: 5, actual_work_done: 'Friderik Dávid', dateCreated: '2018/01/21',dateUpdated: '2018/01/01', timeCardAssigneeID: 'Staff', projectName: 'Active',hrsToday:'6',wbsID:'893'},
        {id: 6, actual_work_done: 'Yiorgos Avraamu', dateCreated: '2018/01/01',dateUpdated: '2018/01/01', timeCardAssigneeID: 'Member', projectName: 'Active',hrsToday:'6',wbsID:'893'},
    ]
    return (

        <>
            <CContainer>
                <h3 className="timecards-page-header mb-3">Upload Documents</h3>

                <CForm>
                    <CRow>
                        {/**assignees */}
                        <CCol lg="4" md="12">
                            {/* <h5 className="info-header-4">Name: </h5>
                            <h5 className="project-details-points name-for-wbs">Fahmida Sharmin Pranto</h5> */}
                            {/**IF PM */}
                            <div>
                                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                                    Select Employee
                                </CLabel>
                                <Select
                                    closeMenuOnSelect={true}
                                    aria-labelledby="assigneeSelect"
                                    id="assigneeSelect"
                                    minHeight="35px"
                                    placeholder="Select from list"
                                    isClearable={false}
                                    isMulti={false}
                                    onChange={(value) => handleChange("options", value)}
                                    classNamePrefix="custom-forminput-6"
                                    value={projectValue}
                                    options={options}
                                    styles={colourStyles}
                                />
                            </div>
                        </CCol>
                        {/**start date */}
                        <CCol lg="3" md="5">
                            <CLabel className="custom-label-5" htmlFor="startDate">
                                From Date
                            </CLabel>
                            <CInput className="custom-forminput-6" type="date" name="startDate" />
                        </CCol>
                        {/**END DATE */}
                        <CCol lg="3" md="5">

                            <CLabel className="custom-label-5" htmlFor="todate">
                                To Date
                            </CLabel>
                            <CInput className="custom-forminput-6" type="date" name="todate" />
                        </CCol>
                        <CCol lg="2" md="2">
                            <div className="button-holder--3">
                                <CButton className="generate-card-button">Go</CButton>
                            </div>
                        </CCol>

                        {/**buttons for format of timecard */}
                        <CCol md="12">
                            <h5 className="tiny-header--5 mt-4">Export</h5>
                            <div className="format-buttons mt-2">
                                <CButton className="file-format-download">PDF</CButton>
                                <CButton className="file-format-download">Excel</CButton>

                                <CButton className="file-format-download">Print</CButton>

                             




                            </div>
                        </CCol>
                        {/**table for displaying all the entries */}
                        <CCol md="12">
                            <div className="mt-3">
                        <CDataTable items={usersData}  fields={[
                  {
                    key: "id",
                    _style: { width: "5%" },
                    _classes: "font-weight-bold",
                  },
                  
                  "actual_work_done",
                  "dateCreated",
                  "dateUpdated",
                  "timeCardAssigneeID",
                  "projectName",
                  "hrsToday",
                  "wbsID",
               
                ]}
                primary
                hover
                striped
                bordered
                sorter
                columnFilter
                
                size="sm"
                itemsPerPage={10}
                pagination
                  >

                        </CDataTable>
                        </div>
                        </CCol>
                    </CRow>
                </CForm>

            </CContainer>



        </>
    )
}
export default TimeCards;