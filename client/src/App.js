// import React from 'react';
// import './App.css';
// import Home from './components/pages/HomePage/Home';
// import Services from './components/pages/Services/Services';
// import Products from './components/pages/Products/Products';
// import SignUp from './components/pages/SignUp/SignUp';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/pages/Footer.js/Footer';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path='/' exact component={Home} />

//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, {useState} from "react";
import ReactDOM from "react-dom";
import Confirmation from "./components/Confirmation";

/* Changes made to this file will not affect your tests.
* This file is used to control the behavior of the web preview.
*/
const App = props => {

// const [isOpen, setIsOpen] = useState(true);
 
  return(
<div id="app">
<p>
UI will show below once you complete the Confirmation component. See <code>App.jsx</code> for more info.
</p>
{/* {isOpen? */}
<Confirmation
message='Is the pie a lie?'
type='message'
// message='Acceptable'
accept={() =>null
// setIsOpen(!isOpen) // prints to browser console
}
// message='Declined'
decline={() => null
}
// setIsOpen(!isOpen)}
/> 
{/* :null} */}
</div>
);
}

export default App;
