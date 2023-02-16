import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import logo from './mylogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="fullback">
        <div className="contentbacking">
          <div>
            <img src={logo} className="mylogo"/>
            <Info />
          </div>
          <div>
            <About />
          </div>
            <Interests />
        </div>
      </div>
    </div>
  )
}

export default App
