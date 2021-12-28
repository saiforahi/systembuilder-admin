import React from 'react'
import { CCard, CCardBody, CCol, CContainer, CDataTable, CRow, CButton, CBadge, CCardHeader } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { Link, useHistory } from 'react-router-dom'
import {API} from '../../Config'
import { fetchProcessorsList } from '../../store/slices/processorsSlice'
import { fetchPowerSuppliesThunk } from '../../store/slices/powerSuppliesSlice'
const PowerSupplies = () => {
    const dispatch = useDispatch()
    let history = useHistory()
    const powersupplies = useSelector(state =>{
        let temp=[]
        Array.from(state.powersupplies.data).forEach((element,idx) => {
            temp.push({'#':idx+1,id:element.id,'Name':element.name,"Brand":element.product.brand,'Stock':element.product.stock,"Price":element.product.price,deleted_at:element.deleted_at})
        });
        return temp
    })
    const delete_laptop=(motherboard_id)=>{
        console.log('id',motherboard_id)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will be able to recover this record from Archieve!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              API.delete('powersupplies/delete/'+motherboard_id).then(response=>{
                if(response.data.success==true){
                  dispatch(fetchPowerSuppliesThunk())
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
    return (
        <>
            <CContainer>
                <CRow className="align-items-center">
                    <CCol md="8" className="mb-3 mb-xl-0 text-left offset-md-2">
                        <Link to="/dashboard/powersupplies/create"><CButton shape="round" color="primary">Add</CButton></Link>
                    </CCol>
                </CRow>
                <hr></hr>
                <CRow>
                    <CCol md="8" className="offset-md-2">
                        <CCard className="custom-wbs-card-1">
                            <CCardHeader>
                                <h3>Power Supplies</h3>
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    items={powersupplies}
                                    fields={[
                                        {
                                            key: "#",
                                            _style: { width: "5%" },
                                            _classes: "font-weight-bold",
                                        },
                                        "Name",
                                        "Brand",
                                        "Stock",
                                        "Price",
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
                                                        <CButton disabled={is_trashed(item.deleted_at)} onClick={() => delete_laptop(item.id)} type="button" size="sm" color="danger">Delete</CButton> {is_trashed(item.deleted_at)==false && <CButton onClick={() => { history.push({ pathname: '/dashboard/laptops/details', state: { brand: item } }) }} size="sm" type="button" color="primary">Edit</CButton>}
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

export default PowerSupplies