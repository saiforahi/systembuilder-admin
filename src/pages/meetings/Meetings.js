import { CContainer, CRow, CCol, CCard, CCardBody, CButton, CInput, CForm, CLabel, CSelect } from '@coreui/react';
import { React, useState } from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import './meetings.css';
import JitsiMeet from '../jitsi/JitsiMeet'
import { useFormik } from 'formik'

const OurMeetings = () => {
    const [meeting,setMeeting]=useState(false)
    const [roomName,setRoomName]=useState('')
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const reset_form=()=>{
        setRoomName("")
        formMeeting.setValues({
            "roomName":""
        })
    }
    const create_meeting=(val)=>{
        switch(val){
            case true:
                setMeeting(val)
                break
            case false:
                reset_form()
                setMeeting(val)
                break
        }
        setMeeting(val)
    }
    const validateMeetForm = (values) => {
        const errors = {};
        if (!values.roomName) errors.org = "Room Name is required!";
        //if (!values.userName) errors.post = "User Name is required!";
        return errors;
    }
    const createRoom=(values)=>{
        setMeeting(true)
    }
    const formMeeting = useFormik({
        initialValues: {
            roomName: '',
            userName: '',
            password: '',
        },
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateMeetForm,
        onSubmit: createRoom,
    })
    return (
        <>
            <CContainer>
                {!meeting ? (
                <div className="row">
                    {/**Upcoming meetings */}
                    <div className="col-md-12 col-lg-4 offset-lg-1">
                        <h4 className="section-name">Meetings</h4>
                        {/*Meeting list */}
                        <div>
                            <CCard className="meeting-cards">
                                <CCardBody>
                                    <div className="d-flex">
                                        <div className="icon-holder">
                                            <VideoCallIcon className="videoIcon" />
                                        </div>
                                        <div>
                                            <h6 className="meeting-id">Meeting ID: #677465</h6>
                                            <h5 className="projectName">Virtual Office</h5>
                                            <div className="join-btn-holder"><CButton className="meeting-join-btn">Join</CButton></div>
                                        </div>
                                    </div>
                                </CCardBody>
                            </CCard>
                            {/**dummy cards,remove after dynamic */}
                        </div> 
                        </div>
                    {/**create a new meeting */}
                    <div className="col-md-12 col-lg-6" >
                   
                        <h4 className="section-name">Create a new meeting</h4>
                        {/**create that meeting!! */}
                        <CCard className="meeting-creator-form">
                            <CCardBody>
                                <CForm>
                                    {/**Project Name */}
                                    <div className="mb-3">
                                        <CLabel className="custom-label-5">Project Name</CLabel>
                                        <CSelect aria-label="Default select example" className="custom-forminput-6">
                                            <option disabled>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </CSelect>
                                    </div>
                                    {/**host name */}
                                    <div className="mb-3">
                                        <CLabel
                                            htmlFor="hostName"
                                            className="custom-label-5"
                                        >Host</CLabel>
                                        <CInput type="text" id="hostName" className="custom-forminput-6" />

                                    </div>
                                    {/*agenda*/}
                                    <div className="mb-3">
                                        <CLabel
                                            htmlFor="agendaItem"
                                            className="custom-label-5"
                                        >Meeting Agenda</CLabel>
                                        <CInput type="text" id="agendaItem" className="custom-forminput-6" />

                                    </div>
                                    {/*room name*/}
                                    <div className="mb-3">
                                        <CLabel
                                            htmlFor="roomItem"
                                            className="custom-label-5"
                                        >Room Name</CLabel>
                                        <CInput 
                                            type="text" 
                                            id="roomName" 
                                            name="roomName"
                                            className="custom-forminput-6" 
                                            value={roomName} 
                                            onChange={(event)=>{setRoomName(event.target.value);formMeeting.handleChange(event)}}
                                        />
                                        {(formMeeting.errors.roomName || formMeeting.touched.roomName) ? (<p className="error">Room Name invalid</p>):''}
                                    </div>
                                    {/**password */}
                                    <div className="mb-3">
                                        <CLabel
                                            htmlFor="exampleInputPassword1"
                                            className="custom-label-5"
                                        >
                                            Password
                                        </CLabel>
                                        <CInput
                                            type="password"
                                            id="exampleInputPassword1"
                                            className="custom-forminput-6"
                                            value={password} onChange={(event)=>setPassword(event.target.value)}
                                        />

                                    </div>
                                    {/**submit button */}
                                    <div className="mb-3 create-meet-btn-holder">
                                        <CButton className="create-meeting-btn" type="button" onClick={formMeeting.handleSubmit}>Create Meeting</CButton>
                                    </div>

                                </CForm>
                            </CCardBody>
                        </CCard>
                        </div>
                    </div>):
                (<CRow>
                    <JitsiMeet roomName={roomName} username="Shaif" onMeetingClose={()=>create_meeting(false)}/>
                </CRow>)}
            </CContainer>
        </>
    )
}
export default OurMeetings;
