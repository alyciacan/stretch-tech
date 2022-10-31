import './App.css';
import Home from '../home/Home';
import Form from '../form/Form';
import IndividualPainting from '../individualPainting/IndividualPainting'
import Navbar from '../navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Form/>
      {/* <IndividualPainting/> */}
    </div>
  );
}

export default App;
