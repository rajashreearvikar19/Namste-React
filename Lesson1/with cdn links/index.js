// const heading = React.createElement("h1", {}, "welcome to  cdn links");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//create following structure using cdn links

/* 1. <div id="parent div">
    <div id="child div">
        <h1>Welcome</h1>
    </div>
</div> */

// const heading1 = React.createElement("div", { id: "parent div" }, React.createElement("div", { id: "child div" }, React.createElement("h1", {}, "I'm a h1 tag")))
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading1);


/*2. <div id="parent div">
    <div id="child div">
        <h1>Welcome</h1>
        <h2>welcome to h2</h2>
    </div>
</div> */

// const heading2 = React.createElement("div", { id: "parent div" }, React.createElement("div", { id: "child div" },[ React.createElement("h1", {}, "I'm a h1 tag"),React.createElement("h2", {}, "I'm a h2 tag")]))
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading2);

/*2. <div id="parent div">
    <div id="child div 1">
        <h1>Welcome</h1>
        <h2>welcome to h2</h2>
    </div>
       <div id="child div 2">
        <h1>Welcome</h1>
        <h2>welcome to h2</h2>
    </div>
</div> */

const heading3 = React.createElement("div", { id: "parent div" }, [React.createElement("div", { id: "child div" }, [React.createElement("h1", {}, "I'm a h1 tag"), React.createElement("h2", {}, "I'm a h2 tag")]), React.createElement("div", { id: "child div" }, [React.createElement("h1", {}, "I'm a h1 tag"), React.createElement("h2", {}, "I'm a h2 tag")])])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading3);