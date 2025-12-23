import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import { ThemeProvider } from "./components/ui/context/theme-provider"

const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <Layout/>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
