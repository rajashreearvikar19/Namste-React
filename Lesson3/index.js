import React from 'react'
import ReactDOM from 'react-dom/client';
//React Elemet-
const heading3 = <h1>In the world of JSX</h1>


//there are two components in react-1.functional component 2.class component
//functional component-
//few this - first letter of component should be captional  and to render component it should wrap inside the</>


//creation of functional component-
// const Heading = () => (<h1>using react functional component</h1>)


//component composition-
const Title = () => {
    return <h1 id='title'>component composition</h1>
}

const Banner = () => (
    <div>
        <Title />
        <h1>using react functional component</h1>
    </div>
)






// how to use react element inside the component just wrap  that in the {} braces

const page = <h1>This is React page</h1>
const Application = () => (<div id='container'>
    {page}
    <h1>This is app component</h1>
</div>)


//how to use one react Element inside
const page1 = <span>This span tag</span>
const page2 = (<div>{page1}
    < h1 > This is React page</h1>
</div>
)
const Application2 = () => (<div id='container'>
    {page}
    <h1>This is app component 2</h1>
</div>)


//call function inside component

const Application3 = () => (<div id='container'>
    {Application2()}
    <h1>This is app component 3</h1>
</div>)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(< Application3 />);