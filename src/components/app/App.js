import './App.css';
import Home from '../home/Home';
import Form from '../form/Form';
import Navbar from '../navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Form/>
    </div>
  );
}

export default App;
