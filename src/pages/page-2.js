import React from "react";

import Layout from "../components/layout";
// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

const SecondPage = () => (
    <Layout>
        <NumberContext.Provider value={42}>
            <div>
                <Display />
                <ExtraDisplay />
                <SomeComponent />
            </div>
        </NumberContext.Provider>
    </Layout>
)

const Display = () => {
    // Use the Consumer to grab the value from context
    // Notice this component didn't get any props!
    return (
        <NumberContext.Consumer>
            {value => <div>The answer is {value}.</div>}
        </NumberContext.Consumer>
    );
}
const ExtraDisplay = () => {
    // Use the Consumer to grab the value from context
    // Notice this component didn't get any props!
    return (
        <NumberContext.Consumer>
            {value => <div>The answer is {value * 2}.</div>}
        </NumberContext.Consumer>
    );
}

const SomeComponent = () => {
    const usernameRef = React.useRef( 'Guus');
    console.log(usernameRef.current);
    const handleSomething = () => {
        console.log(usernameRef.current);
        usernameRef.current = 'Tweep';
        console.log(usernameRef.current);
    }
    return (
        <a onClick={handleSomething}>Hoi</a>
    )
}

export default SecondPage
