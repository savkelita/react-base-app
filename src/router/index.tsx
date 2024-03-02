import React from 'react'
import LayoutComponent from './components/LayoutComponent'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PostsComponent } from '../posts'

export const App: React.FunctionComponent = () => (
  <Routes>
    <Route element={<LayoutComponent />}>
      <Route index path="/" element={<PostsComponent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
)
