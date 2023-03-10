# Chapter 01 - Inception

### 1. What is `Emmet`?

A: Emmet is a plugin for text editors that allows developers to write HTML and CSS code quickly and efficiently. It provides a shorthand syntax for writing code, which can help to reduce the amount of typing required and speed up the coding process.

Emmet was originally created as a plugin for the Sublime Text editor, but has since been adapted for use with many other text editors, including Visual Studio Code, Atom, and Brackets. The plugin is based on a system of abbreviations, or "Emmet expressions," which are expanded into full HTML or CSS code as you type.

For example, instead of typing out the full HTML code for a paragraph element, you can simply type "p" and then press the Tab key, and Emmet will automatically expand this into the full <p></p> element. Emmet can also be used to generate complex code structures, such as lists, tables, and forms, with just a few keystrokes.

### 2. Difference between a `Library and Framework` ?

A: A library is like a box of tools that you can use to build things. Each tool has a specific job, like a hammer for pounding nails or a screwdriver for tightening screws. When you need to do a specific job, you can grab the tool you need from the box and use it to do that job.

A framework is like a set of instructions for building something. It tells you how to build the thing, step by step, and what tools to use at each step. For example, if you were building a birdhouse, a framework would tell you how to cut the wood, where to put the nails, and how to assemble the pieces.

So, a library provides specific tools that you can use to build something, while a framework provides instructions and guidelines for how to build something using those tools.

### 3. What is `CDN` ? Why do we use it ?

A: A CDN (Content Delivery Network) is a network of servers distributed around the world that are used to deliver content, such as images, videos, and other files, to users more quickly and efficiently. CDNs work by caching content on servers that are located closer to users, which reduces the amount of time it takes for the content to be delivered.

### 4. Why is React called React ? 

A: React is a popular JavaScript library for building user interfaces, which was developed by Facebook. The library is known as "React" because it is designed to react to changes in a web application's state and update the user interface accordingly.

### 5. What is crossorigin in script tag?

A: In React, `crossorigin` is an attribute that can be used in the HTML `script` tag to specify whether or not the browser should check the response from the CDN (Content Delivery Network) for a valid CORS (Cross-Origin Resource Sharing) header before allowing the script to be executed.

### 6. What is the difference between `React` and `ReactDOM`?

A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`. The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`

### 7. What is the difference between `react.development.js`and `react.production.js`files via CDN ? 

A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`. `Development build` is several times (maybe 3-5x) `slower` than the `production build`.

### 8. What is `async` and `defer`?

A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don???t wait for anything.

### *Syntax*

```html
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

### *Syntax*

```html
<script src="demo_defer.js" defer></script>
```

Refer : https://www.youtube.com/watch?v=IrHmpdORLu8	