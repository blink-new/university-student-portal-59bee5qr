import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ErrorHandler } from './utils/errorHandler'
import { ErrorBoundary } from './components/ErrorBoundary'

// Set up global error handler to suppress irrelevant browser extension errors
ErrorHandler.setupGlobalErrorHandler()

// Additional safety net: Override console.error to filter out extension errors
const originalConsoleError = console.error
console.error = (...args) => {
  const message = args.join(' ').toLowerCase()
  const ignoredKeywords = ['metamask', 'ethereum', 'web3', 'crypto', 'wallet', 'blockchain']
  
  if (ignoredKeywords.some(keyword => message.includes(keyword))) {
    console.debug('🔇 [Console] Suppressed browser extension console error:', ...args)
    return
  }
  
  originalConsoleError.apply(console, args)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
) 