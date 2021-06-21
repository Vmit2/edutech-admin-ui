/* eslint-disable react/prop-types */
import React from 'react'

export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo })

    this.setState({
      hasError: true,
    })
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      )
    }

    // Normally, just render children
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children
  }
}
