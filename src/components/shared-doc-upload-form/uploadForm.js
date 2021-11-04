import React, { useState } from "react";
import {
  CForm,
  CLabel,
  CInput,
  CCardBody,
  CCard,
  CButton,
  CContainer,
} from "@coreui/react";
import "./uploadForm.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const UploadDocuments = () => {
  const colourStyles = {
    // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
    option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
  };
  const options = [
    { value: "1", label: "Virtual Office" },
    { value: "2", label: "Virtual Doctor" },
    { value: "3", label: "Smart Home" },
    { value: "4", label: "WASA AMR" },
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
  return (
    <>
      <CCard className="mt-4 upload-docs">
        <CCardBody>
          <CContainer>
            {/**Project Name */}
            <div className="mb-3">
              <CLabel className="custom-label-5" htmlFor="prjctSelect">
                Select Project
              </CLabel>
              <Select
                closeMenuOnSelect={true}
                aria-labelledby="prjctSelect"
                id="prjctSelect"
                minHeight="35px"
                placeholder="Select from list"
                isClearable={true}
                isMulti={false}
                onChange={(value) => handleChange("options", value)}
                classNamePrefix="custom-forminput-6"
                value={projectValue}
                options={options}
                styles={colourStyles}
              />
            </div>
            {/**upload files box */}
            <div className="mb-3">
              <CLabel htmlFor="attachments" className="custom-label-5">
                Upload Documents
              </CLabel>
              <CLabel className="custom-file-upload">
                <CInput
                  type="file"
                  id="attachments"
                  className="form-control form-control-file" multiple
                />
                <img
                  src={"assets/icons/upload-thin.svg"}
                  alt=""
                  className="upload-icon"
                />
              </CLabel>
            </div>
            {/**display uploaded files */}
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-4">
                  <div className="file-attached-ongoing rounded-pill">
                    <CButton className="remove-file-ongoing">
                      <img
                        src={"assets/icons/icons8-close-64-blue.png"}
                        className="close-icon-size"
                      />
                    </CButton>
                    abcdjskjdksjkds.xvts
                  </div>
                </div>
                {/**dummy cards,remove once dynamic */}
                <div className="col-md-6 col-sm-6 col-lg-4">
                  <div className="file-attached-ongoing rounded-pill">
                    <CButton className="remove-file-ongoing">
                      <img
                        src={"assets/icons/icons8-close-64-blue.png"}
                        className="close-icon-size"
                      />
                    </CButton>
                    abcdjskjdksjkds.xvts
                  </div>
                </div>

              </div>
            </div>
            {/**Submit buttons */}
            <div className="mb-3 mt-4">
            <div className="project-form-button-holders ">
            <CButton className="profile-form-btn update-profile">Upload Documents</CButton>
                          <CButton className="profile-form-btn cancel-update">Cancel</CButton>
            </div>
            </div>

          </CContainer>
        </CCardBody>
      </CCard>
    </>
  );
};

export default UploadDocuments;
