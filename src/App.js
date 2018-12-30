import React from 'react';
import './App.css';

import { ApolloProvider } from "react-apollo";

import ApolloClient from "apollo-boost";

import ReactLibrarySelector from './components/ReactLibrarySelector'

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
});


const App = () => (
    <ApolloProvider client={client}>
        <div className="App">
            <ReactLibrarySelector />
        </div>
    </ApolloProvider>
)

export default App;
