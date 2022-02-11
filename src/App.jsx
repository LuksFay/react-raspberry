
import {
	BrowserRouter,
	Route,
	Routes
	} from 'react-router-dom';
	import About from './pages/About/About';
	import Home from './pages/Home/Home';
	import NavBar from './components/Navbar';
//import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    	<Navbar/>
    	<Routes>
    		<Route path="/" element={<Home />} />
    		<Route path="/about" element={<About />} />
    	</Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
