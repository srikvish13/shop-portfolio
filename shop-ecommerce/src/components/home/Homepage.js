import React from "react";
import Header from "../header/Header";

const Homepage = () => {
    return (
        <>
            <Header />
            <div>
                <header>
                    <h1>This is initial homepage</h1>
                </header>
                <main>
                    <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
                    <img src="https://via.placeholder.com/300" alt="Placeholder" />
                </main>
            </div>
        </>

    )
}

export default Homepage;