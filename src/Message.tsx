/*
 * PascalCasing naming convention
 */
function Message() {
    /*
     * syntax used is
     * JSX: JavaScript XML
     * which means the code here 
     * will be converted into JavaScript
     * 
     * Check live demo from
     * babeljs.io/repl
     * 
     * A component can have behaviors
     * as well as dynamically generates the content 
     * with control flows.
     * 
     * {} accepts anything that returns a value, 
     * can be a variable or a function, e.g., getName()
     */
    const name = "Mosh";
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;