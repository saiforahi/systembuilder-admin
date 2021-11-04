import React from 'react';
import './evmsTable.css';
import {CButton, CCard, CCardBody} from '@coreui/react';

const evmsView =()=>{
return(
    <>
    <div className="main-holder-projects">
    <h3 className="projectsHeader">
   EVMS Summary
</h3> 
<div className="card-holder1">
<CCard className="project-card1">
        <CCardBody>
            <h6 className="id-no1">Virtual Office</h6>
            <h5 className="card-details2"><span className="p-header-4">CPI:</span> <span className="evmsval">1.5</span> (CPI{'>'}1,within budget.CPI {'<'}1,over budget)</h5>
            <h5 className="card-details2"><span className="p-header-4">SPI :</span><span className="evmsval">1</span>(SPI {'>'}1,within schedule,SPI {'<'}1,behind schedule)</h5>
        </CCardBody>
    
    </CCard>
    <CCard className="project-card1">
        <CCardBody>
            <h6 className="id-no1">Virtual Office</h6>
            <h5 className="card-details2"><span className="p-header-4">CPI :</span> <span className="evmsval">1.5</span>(CPI{'>'}1,within budget.CPI {'<'}1,over budget)</h5>
            <h5 className="card-details2"><span className="p-header-4">SPI :</span> <span className="evmsval"> 1</span>(SPI {'>'}1,within schedule,SPI {'<'}1,behind schedule)</h5>
        </CCardBody>
    
    </CCard> 
</div>
<div className="button-holder3"><CButton className="tiny-buttons1">View all</CButton></div>
   
    </div>  
    
    </>
)
}
export default evmsView;