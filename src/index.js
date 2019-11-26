import React from 'react';
import ReactDOM from 'react-dom'; // let us render the app to our page
import './index.css'; // thats will tell webpack to pull this css file and put it on the page
function Custom(){
    return <span>I'm a Custom component.</span>;
}
// Component
function HelloWorld(){
    let name = 'Or Shalmayev';

    // return React.createElement('div',null, 
    //     React.createElement('h1', null, 'This is a Hello'),
    //     "hello ",
    //     React.createElement('strong', null, name),
    //     React.createElement(Custom)
    // );

    return (
        <>
            <div className="dark">
                <h1>this is how we can put a variable<strong>{name}</strong></h1>
                <h2>this is how we can do math <strong>{41 + 5}</strong></h2>
                <h3>this is how we can do string concatination <strong>{name + '!'}</strong></h3>
                <h4>and we can also do function calls and any other javascript expression inside single braces</h4>
                <h5>to make an expression make sure you put it in a single braces</h5>
                <p>Custom Component: <Custom /></p>
                {/* Differences Between JSX and HTML */}
                    {/* onClick */}
                    <button onClick={()=>console.log('Hello from onClick')}>onClick</button>
                    {/* onDoubleClick */}
                    <button onDoubleClick={()=>console.log('Hello from onDoubleClick')}>onDoubleClick</button>
                    {/* htmlFor */}
                    <label htmlFor="email">Email</label>
                    {/* in JSX every tag needs to be cloes so we cant write <input> without closing line "/" */}
                    <input id="email" />
                    {/* if we want empty div we can do like so: */}
                    <div />

            </div>
            <span>Another element</span>
        </>
    );
}

// Selecting element to put the component detail in it
ReactDOM.render(
    <HelloWorld />, 
    document.querySelector('#root')
);