// Error handler to suppress irrelevant browser extension errors
export class ErrorHandler {
  private static ignoredErrors = [
    'failed to connect to metamask',
    'metamask',
    'ethereum',
    'web3',
    'crypto wallet',
    'coinbase wallet',
    'wallet connect',
    'trust wallet',
    'phantom',
    'solana',
    'binance',
    'crypto',
    'blockchain',
    'wallet'
  ]

  static shouldIgnoreError(error: string): boolean {
    const errorLower = error.toLowerCase()
    return this.ignoredErrors.some(ignored => errorLower.includes(ignored))
  }

  static setupGlobalErrorHandler(): void {
    // Log helpful message for developers
    console.info('🎓 University Student Portal - Enhanced error handler initialized')
    console.info('ℹ️  Browser extension errors (MetaMask, crypto wallets, etc.) will be automatically suppressed')

    // More aggressive error suppression with higher priority
    window.addEventListener('error', (event) => {
      if (this.shouldIgnoreError(event.message)) {
        event.preventDefault()
        event.stopImmediatePropagation()
        console.debug('🔇 [React] Suppressed browser extension error:', event.message)
        return false
      }
    }, true) // Use capture phase for higher priority

    // More comprehensive promise rejection handling
    window.addEventListener('unhandledrejection', (event) => {
      const reason = event.reason
      let shouldSuppress = false
      
      // Check string reasons
      if (typeof reason === 'string' && this.shouldIgnoreError(reason)) {
        shouldSuppress = true
      }
      
      // Check error objects
      if (reason && reason.message && this.shouldIgnoreError(reason.message)) {
        shouldSuppress = true
      }
      
      // Check toString representation
      if (reason && typeof reason.toString === 'function') {
        try {
          const reasonStr = reason.toString()
          if (this.shouldIgnoreError(reasonStr)) {
            shouldSuppress = true
          }
        } catch (e) {
          // Ignore toString errors
        }
      }
      
      // Check stack traces for extension-related errors
      if (reason && reason.stack && this.shouldIgnoreError(reason.stack)) {
        shouldSuppress = true
      }
      
      if (shouldSuppress) {
        event.preventDefault()
        event.stopImmediatePropagation()
        console.debug('🔇 [React] Suppressed browser extension promise rejection:', reason)
        return false
      }
    }, true) // Use capture phase for higher priority
  }
}