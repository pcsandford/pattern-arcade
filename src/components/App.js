import React from "react";
import Header from "./Header";
import Subtitle from "./Subtitle";
import Description from "./Description";
import Pattern from "./Pattern";
import Footer from "./Footer";
import patterns from "../pattern-details";

class App extends React.Component {

    state = {
        patterns: patterns
    }

    render() {

        const desc = "The Pattern Arcade is an open source collection of backgrounds that you can use for your own website or print projects. Each pattern can be downloaded as a PNG file which can be used in your CSS to tile to fill any background size."

        return (
            <main>
                <Header title="Pattern Arcade" />
                    <div className="intro">
                    <Subtitle subtitle="What is the Pattern Arcade?"/>
                    <Description desc={desc} />
                    </div>
                    <ul className="patterns">
                        {Object.keys(this.state.patterns).map(key => (
                            <Pattern 
                                key={key}
                                details={this.state.patterns[key]}
                            />
                        ))}
                        
                    </ul>
                <Footer />
            </main>
        )
    }

};

export default App;