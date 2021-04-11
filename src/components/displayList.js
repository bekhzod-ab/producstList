import axios from 'axios'
import React from 'react'


export default function Display({products, setProducts}) {
    const handleDelete = ({id}) => {
        axios.delete("url", )
        setProducts(products.filter((product) => product.id !== id))
    } 
    const handleDone = (product) => {
        axios.put("url", product.item)
        .then(setProducts(products.map((item) => {
            if(item.id === product.id) {
                return {...item, done: true}
            }return item 
        })))
        .catch((error) => console.log(error.message))
        
    }

    return(
        <div>
            
            {products.map((product) => (
                    <li  key={product.id}>
                    <input className={`${product.done? "done": ""}`} type="text" value={product.item} onChange={(event) => event.preventDefault()}/>
                  
                        <button  onClick={() => handleDone(product)}>
                            <i className="far fa-check-square"></i>
                        </button>
                        <button>
                            <i class="far fa-edit"></i>
                        </button>
                        <button onClick={() => handleDelete(product)}>
                            <i className="far fa-trash-alt"></i>
                        </button>
                    
                </li>
            ))}
        </div>
    )
}