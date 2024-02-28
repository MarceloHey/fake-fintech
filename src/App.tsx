import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Style.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { SalesContextProvider } from './context/salesContext'
import Sales from './pages/Sales'
import Summary from './pages/Summary'
import Sale from './pages/Sale'
function App() {
  return (
    <>
      <BrowserRouter>
        <SalesContextProvider>
          <div className="container">
            <Sidebar />
            <main>
              <Header />
              <Routes>
                <Route path="/" element={<Summary />} />
                <Route path="/vendas" element={<Sales />} />
                <Route path="/vendas/:id" element={<Sale />} />
              </Routes>
            </main>
          </div>
        </SalesContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
