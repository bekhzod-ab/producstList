import axios from 'axios';
import React, { useEffect, useState } from 'react'




export default function List(){
    const [input, setInput] = useState("");
    const [products, setProducts] = useState([])
    // const submitHandler = (event) => {

    // //     event.preventDefault();
    // //     axios.post("http://localhost:4004/products")
    // //     .then((data) => setProducts(data));
    // //     setInput("")
    // // }


    const submitHandler = (event) => {
        event.preventDefault()
    }
    useEffect(()=>{
        axios.get("http://localhost:4004/products")
        .then((data) => {
            setProducts(data)
            console.log(data)
        })
        .catch((e) => console.log(e.message))
    }, [setProducts] )



    
    
    return(
        <form onSubmit={submitHandler}>
            <input type="text" className="products-input"  value={input} onChange={(event) => setInput(event.target.value)}/>
            <button type="submit" className="submit-button">Add a product</button>
        </form>
    )
}