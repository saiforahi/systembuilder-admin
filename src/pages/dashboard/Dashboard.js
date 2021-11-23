import React from 'react';
import { CContainer, CRow } from '@coreui/react';
import './dashboard.css';
import { useLocation } from 'react-router';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

const Dashboard=()=> {
    let location = useLocation()
    const dispatch = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    React.useEffect(()=>{
        console.log('dashboard mounted')
        if(location.state?.from == 'login'){
            enqueueSnackbar('Welcome ',{variant:'success'})
        }
        //console.log(new Date(JSON.parse(sessionStorage.getItem('TOKEN')).time).toISOString())
    },[])
    return (
        <>
        <CContainer>
            {/**Row for showing da tables */}
            <CRow>
                {/* <div className="col-lg-5 offset-lg-1"><ProjectTables/></div>

                <div className="col-lg-5"><AssignedToMe/></div> 
                
                <div className="col-lg-5 offset-lg-1"><EvmsShow/></div>
                
                <div className="col-lg-5"><ScheduledMeetings/></div> */}
            

            </CRow>
        </CContainer>
        </>
    );
}

export default React.memo(Dashboard)
