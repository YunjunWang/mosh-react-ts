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
     */
    const name = "Mosh";
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;