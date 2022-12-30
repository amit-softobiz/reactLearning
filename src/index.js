// const React =require('react');
import React from 'react';
// const ReactDom = require('react-dom');
import ReactDom from 'react-dom';
import './index.css';
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
const name ="amit kumar thakur";
// const img1 = "https://picsum.photos/201";
// const img2 = "https://picsum.photos/202";
// const img3 = "https://picsum.photos/203";
// const img4 = "https://picsum.photos/204";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";
const img4 = "https://picsum.photos/200/300";

const links = 'https://picsum.photos';

ReactDom.render(
<>
<h1 contentEditable="true" className="heading">My name is {name}</h1>
<img src={img1} alt='random pics'/>
<img src={img2} alt='random pics'/>
<img src={img3} alt='random pics'/>
<a href={links} target="ghiuhguihuiohuihiu_jkahnkjdj">
<img src={img4} alt='random pics'/>
</a>
</>
, document.getElementById('root'));