import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Ping?"
        };

        this.serverRequest = this.serverRequest.bind(this);
    }

    serverRequest() {
        axios.get("/api/")
            .then(res => {
                this.setState({
                    message: res.data.message
                });
            });
    }

    componentDidMount() {
        this.serverRequest();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <p>{this.state.message}</p>
                </header>
            </div>
        );
    }
}

export default App;
