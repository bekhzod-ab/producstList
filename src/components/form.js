import React from 'react'
import axios from "axios"



export default function List({input,setInput,products,setProducts}){
    const submitHandler = (event) => {
        
        event.preventDefault();
        setProducts([...products, { id: Math.random()*100, item: input, done: false}]);
        setInput("")
        axios.post("url", input)
        .then(() => console.log(input + "added") )
        .catch((error) => console.log(error.message))
    }
    
    return(
        <form onSubmit={submitHandler}>
            <input type="text" className="products-input" value={input} onChange={(event) => setInput(event.target.value)}/>
            <button type="submit" className="submit-button">Add a product</button>
        </form>
    )
}