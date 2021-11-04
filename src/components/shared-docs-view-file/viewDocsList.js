import CIcon from '@coreui/icons-react'
import { CButton,CCol,CRow,CCard, CCardBody } from '@coreui/react'
import React,{ useState} from 'react'

class ViewFiles extends React.Component {
constructor(){
    super()
    this.state = {
        cars: [
            { "fileName": "VOMock.docX", "uploadedBy": "HASAN RATAN", "createdAt": "12/11/2021" },
            { "fileName": "VOMock.docX", "uploadedBy": "HASAN RATAN", "createdAt": "12/11/2021" },

            { "fileName": "VOMock.docX", "uploadedBy": "HASAN RATAN", "createdAt": "12/11/2021" },

            { "fileName": "VOMock.docX", "uploadedBy": "HASAN RATAN", "createdAt": "12/11/2021" },

            { "fileName": "VOMock.docX", "uploadedBy": "HASAN RATAN", "createdAt": "12/11/2021" },

            { "fileName": "VOMock.docX", "uploadedBy": "HASAN RATAN", "createdAt": "12/11/2021" },

            { "fileName": "VOMock.docX", "uploadedBy": "HASAN RATAN", "createdAt": "12/11/2021" },
            { "fileName": "VOMock.docX", "uploadedBy": "HASAN RATAN", "createdAt": "12/11/2021" }

        ],
        itemToShow:4,
        expanded:false
    }
    this.showMore=this.showMore.bind(this)
}



showMore =()=>{
    this.state.itemToShow === 4?(
        this.setState({itemToShow:this.state.cars.length,expanded:true})
    ):
    (
        this.setState({itemToShow:4,expanded:false})
    )
}
  render(){ 
    return (

        <>
                <h4 className="project-name">Virtual Office</h4>
        <div className="expand-btn-holder">
<CButton className="see-all-btn mb-3" onClick={this.showMore}>{this.state.expanded ? (
             <span>Show less</span>
           ) : (
             <span>Show all</span>
           )
          }</CButton>
</div>
<CRow>
    {this.state.cars.slice(0,this.state.itemToShow).map((car,i)=>
   <CCol lg="3" md="6" sm="6"  key={i}>
   <CCard className="doc-cards">
<CCardBody className="doc-file-body">
<div className="icon-holder-shared-files">
   <CIcon name="cil-file" className="file-icon-show" size="2xl"></CIcon>
</div>
<h5 className="file-name mt-2">{car.fileName}</h5>
<h6 className="create-time"><span className="thicc-header">Created:</span>{car.createdAt}</h6>
<h6 className="uploadedBy"><span className="thicc-header">Uploaded by:</span>{car.uploadedBy}</h6>

</CCardBody>
   </CCard>
</CCol> )}

{/* <CCol lg="2" md="6">

</CCol>
<CCol lg="2" md="6"></CCol>
<CCol lg="2" md="6"></CCol>
<CCol lg="2" md="6"></CCol> */}
</CRow>
        </>
    )
}
}
export default ViewFiles;