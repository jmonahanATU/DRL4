// Importing the `useState` hook from the React library.
import { useState } from "react";

// Define the `Create` component.
function Create() {
    // Declare state variables for title, cover, and author, initializing them with empty strings.
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // Define a function to handle the form submission.
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.

        // Log the values of title, cover, and author to the console when the form is submitted.
        console.log("Title:" + title + " Cover:" + cover + " Author:" + author);
    }

    // Render the component's UI.
    return (
        <div>
            <h2>Hello from Create Component</h2>

            {/* Create a form element with a submission event handler. */}
            <form onSubmit={handleSubmit}>

                {/* Input field for editing book title. */}
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} // Update the 'title' state on input change.
                    />
                </div>

                {/* Input field for editing book cover. */}
                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }} // Update the 'cover' state on input change.
                    />
                </div>

                {/* Input field for editing book author. */}
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }} // Update the 'author' state on input change.
                    />
                </div>

                {/* Submit button for the form. */}
                <div>
                    <input
                        type="submit"
                        value="Add Book"
                    />
                </div>
            </form>
        </div>
    );
}

// Export the `Create` component for use in other parts of the application.
export default Create;
