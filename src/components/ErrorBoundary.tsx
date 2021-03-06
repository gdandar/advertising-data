import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    if ((this.state as any).hasError) {
      // Render custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
