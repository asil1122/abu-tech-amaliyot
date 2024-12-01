import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './config/query-client.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <ConfigProvider theme={{ token: { colorPrimary: '#0eb182' } }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </QueryClientProvider>
)
