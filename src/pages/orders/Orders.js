import React, { useState } from 'react'
import { CCard, CCardBody, CCol, CContainer, CDataTable,CModalBody,CModalTitle,CModal,CForm,CModalHeader, CRow, CButton, CBadge, CCardHeader } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { Link, useHistory } from 'react-router-dom'
import {API} from '../../Config'
import { fetchOrdersThunk } from '../../store/slices/ordersSlice'
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import { LinearProgress } from '@material-ui/core'
import './myProjects.css'

const Orders = () => {
    const dispatch = useDispatch()
    let history = useHistory()
    const [showModal,setShowModal]=useState(false)
    const [selectedOrder,setSelectedOrder]=useState()
    const orders = useSelector(state =>{
        let temp=[]
        for (const [key, value] of Object.entries(state.orders.data)) {
            console.log(`${key}: ${value}`);
            let sale_total=0
            value.forEach((item,idx)=>{
                sale_total+=parseInt(item.product.price)
            })
            temp.push({'#':temp.length+1,id:value[0].id,'Tracking Code':key,'Customer':value[0].customer_name,"Total TK":sale_total,'Payment Type':value[0].payment_type.name,'Payment Status':value[0].payment_status,deleted_at:value[0].deleted_at,data:value})
          }
        // Array.from(state.orders.data).forEach((element,idx) => {
        //     temp.push({'#':idx+1,id:element.id,'Tracking Code':element.tracking_code,'Customer':element.customer_name,'Payment Type':element.payment_type.name,'Payment Status':element.payment_status,deleted_at:element.deleted_at,data:element})
        // });
        return temp
    })
    const show_details=(item)=>{
        setSelectedOrder(item)
        setShowModal(true)
        
    }
    const delete_order=(order_id)=>{
        console.log('id',order_id)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will be able to recover this record from Archieve!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              API.delete('orders/delete/'+order_id).then(response=>{
                if(response.data.success==true){
                  dispatch(fetchOrdersThunk())
                  swal("Poof! Your selected Car record has been deleted!", {
                    icon: "success",
                  });
                  
                }
                else if(response.data.success==false){
                  swal("Poof!"+response.data.message, {
                    icon: "error",
                  });
                }
                
              }).catch(error=>{
                //swal("Failed!",error,"error");
              })
              
            }
          });
    }
    const is_trashed=(deleted_at)=>{
        return deleted_at==null?false:true
    }
    const [updating,setUpdating]=useState(false)
    const make_paid=(tracking_code)=>{
        setUpdating(true)
        API.get('orders/make-paid/'+tracking_code).then((res)=>{
            setUpdating(false)
            setShowModal(false)
            dispatch(fetchOrdersThunk())
            swal('Updated!','Payment Status updated','success')
        }).catch(err=>{
            setUpdating(true)
        })
    }
    React.useEffect(()=>{
        dispatch(fetchOrdersThunk())
    },[])
    return (
        <>
            {selectedOrder!=undefined && <CModal size="lg" alignment="center" show={showModal} onClose={() => { setShowModal(false) }}>
                <CModalHeader onClose={() => {setShowModal(false)}} closeButton>
                    <CModalTitle className="modal-title-projects">
                        <span className="edit-profile-form-header">Order Details</span>
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CContainer>
                        <CForm>
                            <CRow>
                                {/* <div className="card-header-portion-ongoing">
                                    <h4 className="ongoing-card-header-1">
                                        <IconButton aria-label="favourite" disabled size="medium" color="primary">
                                            <GradeIcon fontSize="inherit" className="fav-button" />
                                        </IconButton>
                                        
                                    </h4>

                                </div> */}
                                <div className="justify-content-center">
                                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 mt-1 mb-2">
                                        <CCard className="card-ongoing-project">
                                            <CCardBody className="details-project-body">
                                                <div className="ongoing-initial-info row">
                                                    <div className="tasks-done-2 col-lg-4">
                                                        <h6 className="">Reciepient Name</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].customer_name}</h6>
                                                        </div>
                                                    <div className="tasks-done-2 col-lg-4">
                                                        <h6 className="">Reciepient Phone</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].customer_phone}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Reciepient Email</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].customer_email}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Reciepient Address</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].shipping_address}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Order Date</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].created_at}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Payment Status</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].payment_status}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Payment Type</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].payment_type.name}</h6>
                                                    </div>
                                                    
                                                </div>

                                                <div className="col-md-12 mt-4 mb-2">
                                                    <h5 className="projectName mb-3">Product(s)-({selectedOrder.data.length})</h5>
                                                    <div className="file-show-ongoing-details row">
                                                        {selectedOrder.data != undefined && Array.from(selectedOrder.data).map((item, idx) => (
                                                            <div key={idx} className="col-md-4 col-sm-6 col-lg-4">
                                                                <div className="file-attached-ongoing rounded-pill">
                                                                    {item.product.name}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-12 mt-2 mb-2">
                                                    <div className="project-actions">
                                                        <CButton className="edit-project-ongoing-task" onClick={() => editInfoForm(subtask)} ><CIcon name="cil-pencil" className="mr-1" /> Edit </CButton>
                                                        <CButton type="button" onClick={() => delete_subtask(subtask.work_package_index)} className="delete-project-2"><CIcon name="cil-trash" className="mr-1" /> Delete</CButton>
                                                    </div>
                                                </div> */}
                                            </CCardBody>
                                        </CCard>
                                    </div>
                                </div>
                            </CRow>
                            {/**forward to wbs button  */}
                            <CRow className="justify-content-center">
                                {updating? <LinearProgress/>:
                                <CButton type='button' onClick={()=>make_paid(selectedOrder.data[0].tracking_code)} disabled={selectedOrder.data[0].payment_status == 'paid'} className="create-wbs-from-modal">Make Paid</CButton>}
                            </CRow>
                        </CForm>
                    </CContainer>
                </CModalBody>
            </CModal>}

            {/* data table */}

            <CContainer>
                <CRow>
                    <CCol md="10" className="offset-md-1">
                        <CCard className="custom-wbs-card-1">
                            <CCardHeader>
                                <h3>Orders</h3>
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    items={orders}
                                    fields={[
                                        {
                                            key: "#",
                                            _style: { width: "5%" },
                                            _classes: "font-weight-bold",
                                        },
                                        "Tracking Code","Customer","Total TK","Payment Type","Payment Status",
                                        {
                                            key: "Action",
                                            label: "Actions",
                                            _style: { maxWidth: "5%" },
                                            sorter: true,
                                            filter: false,
                                        },
                                    ]}
                                    light
                                    hover
                                    striped
                                    bordered
                                    sorter
                                    columnFilter
                                    size="sm"
                                    itemsPerPage={10}
                                    pagination
                                    scopedSlots={{
                                        'Action':
                                            (item) => (
                                                <td>
                                                    <CBadge> 
                                                        <CButton disabled={is_trashed(item.deleted_at)} onClick={() => delete_order(item.id)} type="button" size="sm" color="danger">Delete</CButton> {is_trashed(item.deleted_at)==false &&<CButton onClick={() => {show_details(item)}} size="sm" type="button" color="primary">Details</CButton>} {/*onClick={() => { history.push('/dashboard/orders/details/'+item.id)}} */}
                                                    </CBadge>
                                                </td>
                                            )
                                    }}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    )
}

export default Orders