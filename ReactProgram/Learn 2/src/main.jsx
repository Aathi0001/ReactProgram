import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'


/* 
let ElementByUsingCreateElement = React.createElement("h1", {id:"first", title:"Heading Tag"}, "Hello, Element By Using ", React.createElement("u", {}, "react.CreateElement") );
// React.createElement -> (ElementName , {Object} , content);

let ElementByJSX = <h1>Hello, Element Using <u>JSX</u></h1>
// Using JSX --> JavaScript XML



ReactDom.createRoot(document.getElementById('root')).render(ElementByUsingCreateElement);

ReactDom.createRoot(document.getElementById('root')).render(ElementByJSX);

ReactDOM.createRoot(document.getElementById('root')).render( 
<div>
     <h1>Hello, </h1> 
     <br></br> 
     <br /> 
     <h2>I am <b><u>Aathi</u></b></h2>
     <label htmlFor="Name">Name:</label>
     <input type="text" id='Name' className='Name' />
</div> 
);


ReactDOM.createRoot(document.getElementById('root')).render(
     <React.Fragment>
          <h1>Hello</h1>
          <h2>I am <u>Aathi</u></h2>
     </React.Fragment>

);

ReactDOM.createRoot(document.getElementById('root')).render(
     <>
          <h1>Hello</h1>
          <h2>I am <u>Aathi</u></h2>
          <h3> I have done my graduation on Aalim Muhammed Salegh College of Engineering on B.E Computer Science Engineering with the CGPA of 8.19.</h3>
     </>

);


let Name = "Aathi"
let a = () => {
     console.log(`My Name is ${Name}`)
}
a();

let num1 = 50;
let num2 = 50;

let b = <h1>My Name is {Name}. Travelling Cost is Rs.{num1 + num2}.</h1>
//We cannot declare variable inside the expression but we can access variables. Eg: let b = <h1>hi {let a =20;}</h1>

let arr = [10,20,30,40];

let Iterate =
     <h1>In Expression For and While Loops not allowed.{
     arr.map((e)=>{
          console.log(e);
     })}</h1>

let d = 20;
let TernaryOperator = <h1> we Cannot use if..else and switch inside Expression. {d} is an {d%2==0?"Even":"Odd"}</h1>

let e = true;
let BooleanValue = <h1>We cannot use Boolean Value Directly, So we use Ternary operator {e} {true} true. {true?"true":"false"} </h1>
//   O/P: We cannot use Boolean Value Directly, So we use Ternary operator true. true

let Function = <h1>Only IIFE function we declare and invoke. {(function abc() {console.log("I am IIFE")})()}</h1>

ReactDOM.createRoot(document.getElementById('root')).render(<> {Iterate} {TernaryOperator} {BooleanValue} {Function}</>);
 */

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


