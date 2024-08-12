import { AppQueryClientProvider } from './providers/queryClient.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPages } from 'pages'
import { AppRoutes } from 'shared/config/routes.ts'
import "./styles/index.sass"

const { MainLazyPage} = UserPages

function App() {
  return (
    <AppQueryClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.MAIN} element={<MainLazyPage />} />
          <Route path={AppRoutes.APPOINTMENT} element={<MainLazyPage />} />
        </Routes>
      </BrowserRouter>
    </AppQueryClientProvider>
  )
}

export default App
