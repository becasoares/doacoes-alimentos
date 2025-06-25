import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './screens/home'
import Form from './screens/form'

function App() {
  const [queroDoar, setQueroDoar] = useState(false)

  if (queroDoar == true) {
    return (<Form setQueroDoar/>)
  } else {Voltar
    return (<Home setQueroDoar={setQueroDoar}/>)
  }
}

export default App
