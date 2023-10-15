// Functional component called Content
function Content() {
    // The component returns the following JSX
    return (
      <div>
        <h1>Hello World!</h1> {/* Heading 1 displaying "Hello World!" */}
        <h2>It is {new Date().toLocaleTimeString()}.</h2> {/* Heading 2 displaying the current time */}
      </div>
    );
  }
  
  // Exporting the Content component as the default export
  export default Content;
  