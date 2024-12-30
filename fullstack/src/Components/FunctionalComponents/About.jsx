import "react";
const About=(props)=>{
    return <section>
        <h1>This is my About page</h1>
        <h2>Pursuing my degree at {props.college}</h2>
        <p>{props.clg1}</p>
        </section>

}
export default About;