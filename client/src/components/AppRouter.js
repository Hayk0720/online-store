import React from 'react'
import { Routes, Route, Navigate  } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts';

function AppRouter() {
    const isAuth = false
  return (
    <Routes>
      { isAuth === true && authRoutes.map(({path,Component}) => 
      <Route key = {path} path={path} Component={Component} exact/>
      )}
      { publicRoutes.map(({path,Component}) => 
      <Route key = {path} path={path} Component={Component} />
      )}
      <Route path = "*" element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
  )
}

export default AppRouter
