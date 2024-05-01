import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import App from './App';
import Submit from './Submit';
import Getid from './Getid';
function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Getid></Getid>}/>
        <Route path="/Submit" element={<App></App>}></Route>
        <Route path="/image/:imageId" element={<Submit></Submit>} />
      </Routes>
    </Router>
  );
}

export default Home;