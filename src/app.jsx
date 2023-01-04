
import add from './add';
import sub from './sub';
import mul from './multi';
import div from './div';

function App(){
    return (
    <>
        <ol>
            <li>Sum of two no. is {add(20, 30)}</li>
            <li>Sub of two no. is {sub(20, 30)}</li>
            <li>Mul of two no. is {mul(20, 30)}</li>
            <li>div of two no. is {div(20, 30)}</li>
        </ol>
    </>)
}

export default App;








//////////////////////////////////////////////////////////////////////////////////////
// const youtuber = "jai shree ram";
// const favprog  = "reactjs"

// const fullname ="thakur";
// function myName(){
//     return fullname;
// }
// export default youtuber;
// export {favprog, myName};
///////////////////////////////////////////////////////////////////////

// import React from 'react';
// import Heading from './Heading';
// import Para from './para';
// import List from './list';


// function App(){
//     return (
//         <>
//         <Heading/>
//         <Para/>
//         <List/> 
//         </>
//     )
// }

// export default App;