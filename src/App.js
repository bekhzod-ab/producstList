import React, {useState} from 'react'
import Header from "./components/header.js"
import List from "./components/form.js"
import Display from "./components/displayList.js"


function App() {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([])

  return (
    <div className="container">

      <div className="app-wrapper">
        <Header/>
      </div>

      <div>
        <List
        input={input} setInput={setInput} products={products} setProducts={setProducts}
        />
      </div>
      <div>
        <Display products={products} setProducts={setProducts}/>
      </div>


    </div>
  )
}

  

export default App;
