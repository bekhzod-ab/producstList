import axios from "axios"
import React, {useState, useEffect} from 'react'



export default function Display() {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState([])
    
    const fetchingProduct = () => {
        axios.get("/api/products")
        .then((result) => {
            setProducts(result.data)
        })
        .catch((e) => console.log(e.message))
    }
    useEffect(fetchingProduct, [] )
    


    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("/api/save", {input})
        .then(() => fetchingProduct());
        setInput("")
    }

    const handleDone = (_id) => {
        axios.put(`/api/products/${_id}`)
        .then(() => fetchingProduct() )
        .catch((e) => console.log(e.message))
        
    }
    


    const handleDelete = (_id,item) => {
        axios.delete(`/api/products/${_id}`)
        .then(() => console.log(`${item} was deleted`))
        .then(() => fetchingProduct())
        .catch((e) => console.log(e.message))
    }

    
    return(
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" className="products-input"  value={input} onChange={(event) => setInput(event.target.value)}/>
            <button type="submit" className="submit-button">Add a product</button>
        </form>
                  
        
            {products.map((product) => (
                    <li  key={product._id}>
                    <input className={`${product.done? "done": ""}`} type="text" value={product.item} />
                  
                        <button  className="done-button" onClick={() => handleDone(product._id)}>
                            <i className="far fa-check-square"></i>
                        </button>
                        <button className="delete-button" onClick={() => handleDelete(product._id,product.item)}>
                            <i className="far fa-trash-alt"></i>
                        </button>
                        <div>
                       
                </div>
                    
                </li>
            ))}
            
        </div>
    )
}


