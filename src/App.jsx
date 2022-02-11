import react from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Route,
	Routes
	} from 'react-router-dom';
	import About from './pages/About/About';
	import Home from './pages/Home/Home';
//import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    	<main>
    		<Routes>
    			<Route path="/about" element{<About />} />
    			<Route path="/" element{<Home />} />
    		</Routes>
    	</main>
    </BrowserRouter>
    </>
  );
}

export default App;
