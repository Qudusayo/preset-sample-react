import React from 'react';

import Footer from './Components/Footer'
import Header from './Components/Header'
import Factors from './Components/Factors'
import Amenities from './Components/Amenities'
import Navbar from './Components/Navbar'
import Reason from './Components/Reason'
import Testimonial from './Components/Testimonial'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Factors />
      <Reason />
      <Amenities />
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
}

export default App;
