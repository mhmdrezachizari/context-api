import { MyProvider } from '../myContext/myContext'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'
function App() {
  return (
    <>
  <MyProvider>
    <Card/>
    <Form/>
  </MyProvider>
    </>
  )
}

export default App
