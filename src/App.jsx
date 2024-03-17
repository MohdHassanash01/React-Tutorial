import React from 'react'
import { Sample1,Sample2 } from './components/Sample1';


function App() {

  let name = "Mohd hassan asharf"

  return (

 <div>
 
<h1>{name}</h1>

<Demo/>
<Sample1/>
<Sample2/>
    
    </div>
  )
}


function Demo(){
  return (
    <>
    <h1>this is Demo function</h1>
    </>
  )
}

export default App;
