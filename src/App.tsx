import { Route,  Routes  } from "react-router-dom"
import { Login } from "./pages/login"
import { Contracts } from "./pages/contracts"
import { MainLayout } from "./layout/main-layout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/app" element={<MainLayout/>}>
          <Route index element={<Contracts/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
