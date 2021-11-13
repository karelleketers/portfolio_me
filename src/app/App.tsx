import React from 'react';
import { Home, Connect, Projects, Project} from './components/pages';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Modal } from './components/layout'

const App = () => {
  return (
    <Router>
      <div className="font-reg text-light relative max-w-120 m-auto selection:bg-gold selection:text-light">
       <Modal/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/connect" component={Connect} />
          <Route path="/projects" component={Projects} />
          <Route path="/project/:id" component={Project}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
