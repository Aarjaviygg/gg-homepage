import './App.css';
import {Routes, Route} from 'react-router-dom';
import InfluencersPage from './components/InfluencersPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/influencer' element={<InfluencersPage/>}/>
    </Routes> 
    </div>
  );
}

export default App;
