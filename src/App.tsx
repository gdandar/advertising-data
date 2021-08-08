import React from 'react'
import { RecoilRoot } from 'recoil'

import Dashboard from './components/Dashboard'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  )
}

export default App
