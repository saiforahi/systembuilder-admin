import React, { Suspense, useState } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import {user_groups} from '../helper'
// routes config
import innerRoutes from '../routes/DashboardRoutes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  const [groups,setGroups]=useState(user_groups())
  React.useEffect(()=>{
    console.log('Container mounted')
  },[])
  return (
    <main className="c-main">
      <CContainer>
        <Suspense fallback={loading}>
          <Switch>
            {innerRoutes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            {/* <Redirect from="/" to="/dashboard" /> */}
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
