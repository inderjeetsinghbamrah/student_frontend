import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Username from "./pages/Username"
import Register from "./pages/Register"
import Password from "./pages/Password"
import Recovery from "./pages/Recovery"
import Reset from "./pages/Reset"
import PageNotFound from "./pages/PageNotFound"


const App = () => {
  return (
      <>
        <Router>
            <Routes>
                    <Route path="/" element={<Username />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/password" element={<Password />} />
                    <Route path="/recovery" element={<Recovery />} />
                    <Route path="/reset" element={<Reset />} />
                    <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Router>
      </>
  )
}

export default App
