import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import { MyProvider } from './myContext/Mycontext'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
  },
    [])

  return (
    <>
      <MyProvider>
        <Header />
        <Products />
        <Form />
      </MyProvider>

    </>
  )
}

export default App
