// App.js
import React from 'react';
import Body from './components/body'; // Import the Name component
import Nav from './components/nav'; // Import the Name component
import Footer from './components/footer'; // Import the Name component

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <Nav />
      <Body />
      <Footer />

    </div>
  );
}

export default App;