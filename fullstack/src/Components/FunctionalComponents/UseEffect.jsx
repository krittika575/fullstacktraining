/*import {useEffect, useState} from "react";
import axios from 'axios';
var UseEffect=()=>{
    /*var [text,setText]=useState("Kongu");
    useEffect(()=>{
        setText("KEC");
},[])
    return(
        <section>
            <h1>Use Effect Example</h1>
            <input type="text" placeholder="Enter your Text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <h2>Text Typed is {text}</h2>   
        </section>
    )
//
var[post,setPost]=useState([]);
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res.data)
        setPost(res.data)
    })
    .catch((err)=>{
        console.log(err)});
},[])
/*return(
    <section>
        <h1>Fetching data from Json Placeholder API</h1>
        <h2>Posts are {post}</h2>
        <ol>
            {post.map((data)=>{
                <li key={data.userId}>{data.title}</li>
            })}
        </ol>
    </section>
)}*/
/*
return(
    <section>
        <h1>Fetching data from Json Placeholder API</h1>
        <h2>Posts are {post}</h2>
        <ol>
           {post.map((data)=>(<li key ={data.id}>{data.title}</li>))} 
        </ol>
    </section>
)}
export default UseEffect;
*/
import{useEffect,useState}from 'react';
import axios from 'axios';
const UseEffect=()=>{
    //var [text,setText]=useState("kongu");
    //useEffect(()=>
    //console.log(text))
    
   // return(
        //<section>
          //  <h1>
            //    Use Effect Example
           // </h1> 
     //    <input type="text" placeholder ="enter your text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
       // <h2>Text entered is {text}</h2>
        //</section>
    //)
    /*var [post,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(res=>{console.log(res)
            setPost(res.data)
        }).catch((err)=>console.log(err));

    },[])
    return(
       <section>
        <h1>Fetching data from json Placeholder API</h1>
        <h2>Posts are</h2>
        <ol>
            {post.map((data)=><li key={data.userId}>{data.body}</li>)}
        </ol>
       </section>
    )


}
export default UseEffect;
*/
var [post,setPost]=useState([])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res=>{console.log(res)
        setPost(res.data)
    }).catch((err)=>console.log(err));

},[])
return(
   <section>
    <h1>Fetching data from json Placeholder API</h1>
    <h2>Posts are</h2>
    <ol>
        {post.map((data)=><li key={data.albumId}>{data.url}</li>)}
    </ol>
   </section>
)


}
export default UseEffect;
