import Left from './Left';
import Centre from './Centre';
import Right from './Right';
import CState from './Class';
import FState from './Function';

let App=()=>{
     return (
          <div>
               <div>
                    <nav>
                         <Left></Left>
                         <Centre></Centre>
                         <Right></Right>
                    </nav>
               </div>
               <div className='sep'>
	               <CState></CState>
	               <FState></FState>
               </div>
          </div>

     );
};

export default App