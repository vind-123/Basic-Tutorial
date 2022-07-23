import React, { useState } from 'react'
import Categories from './Category'
import Menu from './Menu'
import items from './data'


function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hello World')

    }

    return (
        <section className="section-center">
            <h3>tired of boring lorem ipsum</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount">
                    Paragraph:

                </label>
                <input type="number" name="amount" id="amount" value={count}
                    onChange={(e) => setCount(e.target.value)} />
                <button type="submit" className="btn">generate button</button>
            </form>
            <article className="lorem-text">
                <p>
                
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                </p>
            </article>
        </section>

    )
}
export default App;