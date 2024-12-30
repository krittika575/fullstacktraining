import "react";
import {useState} from 'react';

const Gallery=()=>{
    var [counter,setCount]=useState(0);
 
    function increment(){
        setCount(counter+1)
    }
    function decrement(){
        setCount(counter-1)
    }
    
    return <section>
         <h1>This is my Gallery page</h1>
         <h2>Learning State</h2>
         <h3>The state of my variable counter is {counter}</h3>
         <button onClick={increment}>Increment</button>
         <button onDoubleClick={decrement}>Decrement</button>
         <button onClick={()=>{setCount(0)}}>Reset</button>
            </section>

}
export default Gallery;