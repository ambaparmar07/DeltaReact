function handleFormSubmit(event) {
    console.log("form was submitted!");
    // event.preventDefault();
}

export default function Form() {
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="write something" />
            <button>Submit</button>
        </form>
    )
}