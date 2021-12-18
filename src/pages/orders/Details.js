import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Details=()=>{
    const location = useLocation()
    React.useEffect(()=>{
        
    },[])
    return(
        <>
        <CContainer>
            <CRow>
                <CCol>
                    Order Details
                </CCol>
            </CRow>
        </CContainer>
        </>
    )
}

export default Details