import 'react';
const Home=()=>{
    var styling={
        fontsize:"30px",
        textDecoration:"underline",
        color:"brown"
    }
    return(
        <div className="box-model"> 
            <h2 id="idSEg">Fullstack Training </h2>
            <p style={{color:"grey"}}>Day 4</p>
            <p style={styling}>React</p>
        </div>
    );
}
export default Home;
