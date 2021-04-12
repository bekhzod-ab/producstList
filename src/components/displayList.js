import axios from "axios"
import React from 'react'




export default function Display({products, setProducts}) {
   

    const handleDelete = ({id}) => {
        axios.delete("http://localhost:7070/delete", {id})
        .then(() => console.log(`product with following ${id} was deleted`))
        .then(setProducts(products.filter((product) => product.id !== id)))
    } 
    const handleDone = (product) => {
        axios.put("http://localhost:7070/edit" )
        setProducts(products.map((item) => {
            if(item.id === product.id) {
                return {...item, done: true}
        }return item 
        }))
        
    }

    const saveHandler = (product) => {
        axios.post("http://localhost:7070/products", product.item, product.done)
        .then(() => console.log(`product was added`))
        .catch((error) => console.log(error.message))
    }
    
    return(
        <div>
            
            {products.map((product) => (
                    <li  key={product.id}>
                    <input className={`${product.done? "done": ""}`} type="text"  value={product.item} onChange={(event) => event.preventDefault()}/>
                  
                        <button onClick={() => handleDone(product)}>
                            <i className="far fa-check-square"></i>
                        </button>
                        <button onClick={() => handleDelete(product)}>
                            <i className="far fa-trash-alt"></i>
                        </button>
                        <div>
                        <button onClick={() => saveHandler(product)}>Save the list</button>
                </div>
                    
                </li>
            ))}
            
        </div>
    )
}


// 