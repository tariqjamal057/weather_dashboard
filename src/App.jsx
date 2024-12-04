import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layouts/Layout'
import Dashboard from './pages/Dashboard'
import SavedLocation from './pages/SavedLocation'


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Dashboard/>}></Route>
                    <Route path='/saved' element={<SavedLocation/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
            
}

export default App
