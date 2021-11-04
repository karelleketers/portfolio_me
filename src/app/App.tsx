import React from 'react';
import { Header } from './components/layout';
import { Home, Connect, Projects } from './components/pages';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="font-reg text-light relative max-w-120 m-auto selection:bg-gold selection:text-light">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/connect" component={Connect} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
