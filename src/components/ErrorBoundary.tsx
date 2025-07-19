import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    // Check if this is a MetaMask or other irrelevant error
    const irrelevantErrors = ['MetaMask', 'ethereum', 'web3', 'crypto wallet']
    const isIrrelevant = irrelevantErrors.some(keyword => 
      error.message.toLowerCase().includes(keyword.toLowerCase())
    )

    // Don't show error boundary for irrelevant errors
    if (isIrrelevant) {
      console.debug('Suppressed irrelevant error in ErrorBoundary:', error.message)
      return { hasError: false }
    }

    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Check if this is a MetaMask or other irrelevant error
    const irrelevantErrors = ['MetaMask', 'ethereum', 'web3', 'crypto wallet']
    const isIrrelevant = irrelevantErrors.some(keyword => 
      error.message.toLowerCase().includes(keyword.toLowerCase())
    )

    if (isIrrelevant) {
      console.debug('Suppressed irrelevant error in componentDidCatch:', error.message)
      return
    }

    console.error('Uncaught error:', error, errorInfo)
  }

  private handleReload = () => {
    window.location.reload()
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-xl">Something went wrong</CardTitle>
              <CardDescription>
                The University Portal encountered an unexpected error. This is usually temporary.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {this.state.error && (
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 font-mono">
                    {this.state.error.message}
                  </p>
                </div>
              )}
              <div className="flex gap-2">
                <Button onClick={this.handleReset} variant="outline" className="flex-1">
                  Try Again
                </Button>
                <Button onClick={this.handleReload} className="flex-1">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                If this problem persists, please contact IT support.
              </p>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}