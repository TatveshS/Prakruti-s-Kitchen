import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className='bg-gradient-to-r from-stone-500 to-stone-300' >
    <Navbar />
    <Content />
    <Footer />
    </div>

  );
}

export default App;
