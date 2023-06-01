import Nav from './component/navigate';
import Home from './component/home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tweets from './component/tweets';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/tweets' Component={Tweets}/>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
