const heading1 = React.createElement("h1", {}, "heading 1");

const heading2 = React.createElement("h2", {}, "heading2");

const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
]);

//   console.log(heading); //
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
