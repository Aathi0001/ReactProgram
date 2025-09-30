import {useState} from 'react';

let FState = ()=>{
	console.log(useState());
let[state, setState] = useState({count:0});
	console.log(state, setState);
function increment() {
	console.log(state.count);
	setState({ count: state.count + 1});
}
return (
	<div>
		<h1>{state.count}</h1>
       		<button onClick={increment}>fn increment</button>
      	</div>
);


};



export default FState;