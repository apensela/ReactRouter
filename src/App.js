import React from 'react'
import './App.css';
import Nav from './component/Nav';
import Shop from './component/Shop';
import About from './component/About';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './component/Home';
import ItemDetail from './component/ItemDetail';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Login />     */}
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
