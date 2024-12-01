import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="font-bold text-3xl  underline text-purple-600 md:text-red-900 text-blue-900b sm:text-green-900">
                Hello world!
            </h1>
        </>
    )
}

export default App
