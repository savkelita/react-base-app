import React from 'react'
import LayoutComponent from './components/LayoutComponent'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomeComponent } from '../app'

export const App: React.FunctionComponent = () => (
  <Routes>
    <Route element={<LayoutComponent />}>
      <Route index path="/" element={<HomeComponent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
)
