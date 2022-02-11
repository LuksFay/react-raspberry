import react from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Route,
	Routes,
	Redirect,
	Switch
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
    			<Route path="/about" element{<About />}>
    				
    			</Route>
    			<Route path="/" element{<Home />}>
    				
    			</Route>
    		</Routes>
    	</main>
    </BrowserRouter>
    </>
  );
}

export default App;
