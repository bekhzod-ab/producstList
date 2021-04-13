
import Header from "./components/header.js"

import Display from "./components/displayList.js"


function App() {
  console.log("hello")
  

  return (
    <div className="container">

      <div className="app-wrapper">
        <Header/>
      </div>
      <div>
        <Display />
      </div>


    </div>
  )
}

  

export default App;
