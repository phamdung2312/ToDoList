import React, { Component, ErrorInfo, ReactNode } from 'react'

interface PropsType {
  children?: ReactNode
}

interface StateType {
  hasError: boolean
}

export default class ErrorBoundary extends Component<PropsType, StateType> {
  public state: StateType = {
    hasError: false
  }
  public static getDerivedStateFromError(error: Error): StateType {
    return { hasError: true }
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log('Error')
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>This page is not found</h1>
    }
    return this.props.children
  }
}
