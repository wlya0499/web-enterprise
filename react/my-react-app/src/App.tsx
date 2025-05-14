import './App.css'
import HelloWorld from './HelloWorld'
import { PropHello } from './HalloWorld.dto'




function App() {
  const Props: PropHello ={
    name:"willy",
    gender: "laki laki",
    umur: 21

  }
  
  return (
    <>
     <h1>hello world</h1>
     <h2>this is react app</h2>
     <HelloWorld name= 'Willy' gender='laki laki' />
     <HelloWorld {...Props}/>
  
    </>
  )
}

export default App
