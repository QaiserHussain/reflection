import React from 'react'
import Sidebar from '../components/Sidebar'
import Section from '../components/Section'
import { Typography } from '@mui/material'
import Login from '../components/forms/Login'
export default function Landing() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <Typography variant="div" sx={{ display: 'flex', paddingTop: '10vh', height: '90vh' }}>
      <Sidebar />
      <Section />
    </Typography>
  )
}
