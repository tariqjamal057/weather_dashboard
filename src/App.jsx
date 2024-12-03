import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<h1>Home</h1>}></Route>
                    <Route path='/saved' element={<h1>Saved </h1>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
            
}

export default App
