import React, { Suspense } from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/header/Header';
import MatSideBar from '../components/sidebar/MatSideBar';
import { CContainer, CFade } from '@coreui/react';
import innerRoutes from '../routes/DashboardRoutes'
import {
    Route,
    Switch,
  } from 'react-router-dom';
  

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const TheContainer=()=> {
    React.useEffect(()=>{
        console.log('Container mounted')
    },[])
    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <MatSideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3}} mt={10}>
                <Suspense fallback={loading}>
                    <Switch>
                        {innerRoutes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props =>
                                        <route.component {...props} />
                                    } />
                            )
                        })}

                        {/* <Redirect from="/" to="/TheContainer" /> */}
                    </Switch>
                </Suspense>
            </Box>
        </Box>
        </>
    );
}

export default React.memo(TheContainer)
