import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// set the uri property to the URL of your Apollo Server
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Instantiate ApolloClient and set up connection to server
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            {/* <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} /> */}
            <Route path='/' element={<SearchBooks/>} />
            <Route path='/saved' element={<SavedBooks/>} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
