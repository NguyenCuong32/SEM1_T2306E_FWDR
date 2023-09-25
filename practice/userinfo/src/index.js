import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './Navigation';
import Avatar from './Avatar';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navigation /><br></br><br></br>
    <Avatar /><br></br><br></br>
    <Footer />
  </div>
);