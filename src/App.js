import './App.css';
import {Routes, Route} from 'react-router-dom';
import InfluencersPage from './components/InfluencersPage/InfluencersPage';
import HomePage from './components/Homepage/HomePage';

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
