import { AppQueryClientProvider } from './providers/queryClient.tsx'

import "./reset.css"
import "./App.css"

function App() {
  return (
    <AppQueryClientProvider>
      <div>App</div>
    </AppQueryClientProvider>
  )
}

export default App
