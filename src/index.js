// const React =require('react');
import React from 'react';
// const ReactDom = require('react-dom');
import ReactDom from 'react-dom';
import './index.css';
// import Heading from './Heading';
// import Para from './para'; 
// import List from './list';
import App from './app';
// import youtuber,{favprog, myName} from './app';
// ReactDom.render(
//   <div>
// <h1>hi amit is there how are you</h1>
// <p>amit is the best</p></div>
// , document.getElementById('root'));
///////////////////////////////////////////////////////////////////////
// ReactDom.render(
//   <>
//   <h1>My favourate series</h1>
//   <p>Great series watch must</p>
//   <ol>
//     <li>FammilyMan 1</li>
//     <li>FammilyMan 2</li>
//     <li>FammilyMan 3</li>
//     <li>FammilyMan 4</li>
//     <li>FammilyMan 5</li>
//   </ol>
//   </>
//   , document.getElementById('root'));
/////////////////////////////////////////////////////////////////////////
// const name ="amit kumar thakur";
 

// ReactDom.render(
// <>
// <h1>My name is {name}</h1>
// <p>The sum of two numbers {2 + 3}</p>
// </>
// , document.getElementById('root'));
///////////////////////////////////////////////////////////////////////
// const name ="amit kumar thakur";
// const date = new Date();

// ReactDom.render(
// <>
// <h1>My name is {name}</h1>
// <p>Todays date {date.toLocaleDateString()}</p>
// <p>Current Time {date.toLocaleTimeString()}</p>
// </>
// , document.getElementById('root'));
///////////////////////////////////////////////////////////////////////
// .heading{
//     color: #fa9191;
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     text-shadow: 0px 2px 4px #ffe9c5;
//     margin: 70px 0;
//     font-family: 'Josefin Sans', sans-serif;
//     }
// const name ="amit kumar thakur";
// const img1 = "https://picsum.photos/201";
// const img2 = "https://picsum.photos/202";
// const img3 = "https://picsum.photos/203";
// const img4 = "https://picsum.photos/204";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/301";
// const img3 = "https://picsum.photos/200/302";
// const img4 = "https://picsum.photos/200/303";

// const links = 'https://picsum.photos';
// const heading ={
//     color : "#fa9191",
//     textAlign: "center",
//     textTransform: "capitalize",
//     fontWeight: "bold",
//     textShadow: "0px 12px 0px #ffe9c5",
// }
// ReactDom.render(
// <>
// {/* className="heading" */}
// {/* contentEditable="true" */}

// <h1 style={heading}>My name is {name}</h1>
// <div className='img_myimg'>
// <img src={img1} alt='random pics'/>
// <img src={img2} alt='random pics'/>
// <img src={img3} alt='random pics'/>
// <a href={links} target="ghiuhguihuiohuihiu_jkahnkjdj">
// <img src={img4} alt='random pics'/>
// </a>
// </div>
// </>
// , document.getElementById('root'));

//////////////////////////////////////////////////////////////////////////////////
// let curDate = new Date(2022,1,1,21);
// curDate = curDate.getHours();
//  let greeting="";
//  const cssStyle = {
//     color:"green",
//  }
// if(curDate >= 1 && curDate<12){
//     greeting = "Good Morning";
//     cssStyle.color='green';
// }else if(curDate >=12 && curDate <19){
//     greeting= "Good Afternoon";
//     cssStyle.color='orange';
// }else{
//     greeting = "Good Night"; 
//     cssStyle.color='grey';
// }
// ReactDom.render(<>
// <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
// </>,document.getElementById('root')); 
///////////////////////////////////////////
// ReactDom.render(<>
// <App/>

// </>,document.getElementById('root')); 
////////////////////////////////////////////////////
// ReactDom.render(<>
//     {/* <App/> */}
//     <ol>
//         <li>
//             amit kumar
//         </li>
//         <li>{youtuber}</li>
//         <li>{favprog}</li>
//         <li>{myName()}</li>
//     </ol>
//     </>,document.getElementById('root')); 

ReactDom.render(<>
    <App/>
</>,document.getElementById('root'));