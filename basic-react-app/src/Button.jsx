function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("bye!");
}

function handleDbClick() {
    console.log("you double clicked!");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam culpa quas vero iusto laudantium sit? Sequi veritatis rem consectetur velit nam, non corporis quasi impedit atque? Sint, aspernatur nulla! Incidunt quas tempore repellat quia nemo, consectetur, excepturi quod aliquid molestias odio unde. Facere ratione harum odit, quibusdam quam ducimus porro?</p>
            <button onDoubleClick={handleDbClick()}>double click me!</button>
        </div>
    )
}