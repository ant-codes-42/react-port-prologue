import { Link } from "react-router";

export default function Home() {
    return (
        <div id="main">
            <section id="top" className="one dark cover">
                <div className="container">

                    <header>
                        <div className="container">
                            <h2 className="alt">Hi! I'm <strong>Anthony Schwab</strong>, a passionate
                                <strong> technologist.</strong></h2>
                            <p>A former network and telecommunications engineer...
                                now a software developer.</p>
                        </div>
                    </header>

                    <footer>
                        <a href="#portfolio" className="button scrolly">Magna Aliquam</a>
                    </footer>

                </div>
            </section>
        </div>
    );
}