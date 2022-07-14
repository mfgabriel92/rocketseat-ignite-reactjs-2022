import { GlobalStyle } from '@styles/global'
import { defaultTheme } from '@styles/themes/default'
import { Router } from 'Router'
import { CyclesProvider } from 'contexts/CyclesContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CyclesProvider>
          <Router />
        </CyclesProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
