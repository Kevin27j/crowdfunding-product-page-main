import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(176, 50 %, 47 %)',
      dark: 'hsl(176, 72 %, 28 %)',
    },
    common: {
      black: 'hsl(0, 0%, 0%)',
      grey: 'hsl(0, 0%, 48%)',
    }
  },

  typography: {
    fontFamily: 'Commissioner, sans-serif',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
