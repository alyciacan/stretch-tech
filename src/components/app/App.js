import './App.css';
import Home from '../home/Home';
import Form from '../form/Form';
import Navbar from '../navbar/Navbar';
import PageNotFound from '../../pageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Form/>
      <PageNotFound/>
    </div>
  );
}

export default App;
