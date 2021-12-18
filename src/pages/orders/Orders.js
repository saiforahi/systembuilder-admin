import React from 'react'
import { CCard, CCardBody, CCol, CContainer, CDataTable, CRow, CButton, CBadge, CCardHeader } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { Link, useHistory } from 'react-router-dom'
import {API} from '../../Config'
import { fetchOrdersThunk } from '../../store/slices/ordersSlice'
const Orders = () => {
    const dispatch = useDispatch()
    let history = useHistory()
    const orders = useSelector(state =>{
        let temp=[]
        Array.from(state.orders.data).forEach((element,idx) => {
            temp.push({'#':idx+1,id:element.id,'Tracking Code':element.tracking_code,'Customer':element.customer_name,'Payment Type':element.payment_type.name,'Payment Status':element.payment_status,deleted_at:element.deleted_at})
        });
        return temp
    })
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
    React.useEffect(()=>{
        dispatch(fetchOrdersThunk())
    },[])
    return (
        <>
            <CContainer>
                <CRow className="align-items-center">
                    <CCol md="8" className="mb-3 mb-xl-0 text-left offset-md-2">
                        <Link to="/dashboard/processors/create"><CButton shape="round" color="primary">Add</CButton></Link>
                    </CCol>
                </CRow>
                <hr></hr>
                <CRow>
                    <CCol md="8" className="offset-md-2">
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
                                        "Tracking Code","Customer","Payment Type","Payment Status",
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
                                                        <CButton disabled={is_trashed(item.deleted_at)} onClick={() => delete_order(item.id)} type="button" size="sm" color="danger">Delete</CButton> {is_trashed(item.deleted_at)==false &&<CButton onClick={() => { history.push('/dashboard/orders/details/'+item.id)}} size="sm" type="button" color="primary">Details</CButton>}
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