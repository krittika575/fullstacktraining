import {useEffect,useRef,useState} from 'react';
/*var UseRef=()=>{
    var[text,setText]=useState("");
    var prevText=useRef();
    useEffect(()=>{
        prevText.current=text
    },[text])
    return(
        <section>
            <h1>This is an example of UseRef</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>My Current Render is {text}</h2>
            <h2>My previous Render is {prevText.current}</h2>
        </section>
    )
}
export default UseRef;
*/

var UseRef=()=>{
    var[number,setNumber]=useState(0);
    var prevNum=useRef();
    useEffect(()=>{
        prevNum.current=number
    },[number])
    
    return(
        <section>
            <h1>This is an example of UseRef</h1>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}
            />
          
            <h2>My Current Render is {number}</h2>
            <h2>My previous Render is {prevNum.current}</h2>
        </section>
    )
}
export default UseRef;

//create fake api and display it in useeffect
