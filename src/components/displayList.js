import axios from "axios"
import React, {useState, useEffect} from 'react'



export default function Display() {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState([])
    const [currentId, setCurrentId] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:4004/products")
        .then((result) => {
            setProducts(result.data)
        })
        .catch((e) => console.log(e.message))
    }, [products] )
    


    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:4004/save", {input})
        .then(() => console.log("success"));
        setInput("")
    }

    const handleDone = () => {
        axios.put(`http://localhost:4004/products/:${currentId}`)
        .then(() => console.log("success"))
        .catch((e) => console.log(e.message))
        
    }
    // const submitHandler = (event) => {
    //     event.preventDefault()
    // }
  



    // const handleDelete = ({id}) => {
    //     axios.delete(`http://localhost:7070/delete/${id}`)
    //     .then(() => console.log(`product with following ${id} was deleted`))
    //     .then(setProducts(products.filter((product) => product.id !== id)))
    // }

    
        
    // }

    // const saveHandler = (product) => {
    //     axios.post("http://localhost:4004/products", product.item, product.done)
    //     .then(() => console.log(`product was added`))
    //     .catch((error) => console.log(error.message))
    // }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" className="products-input"  value={input} onChange={(event) => setInput(event.target.value)}/>
            <button type="submit" className="submit-button">Add a product</button>
        </form>
                  
        
            {products.map((product) => (
                    <li  key={product.id}>
                    <input className={`${product.done? "done": ""}`} type="text" value={product.item} onChange={(event) => event.preventDefault()}/>
                  
                        <button  value={currentId} onChange={(event) => setCurrentId(event.target.value)} onClick={handleDone}>
                            <i className="far fa-check-square"></i>
                        </button>
                        <button id={product.id} >
                            <i className="far fa-trash-alt"></i>
                        </button>
                        <div>
                        <button>Save the list</button>
                </div>
                    
                </li>
            ))}
            
        </div>
    )
}


