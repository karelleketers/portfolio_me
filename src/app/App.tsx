import React from 'react';
import { Home, Connect, Projects, Project, NotFound} from './components/pages';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Modal } from './components/layout';
import { Cookies } from './components/components'

const App = () => {
  return (
    <Router>
      <div className="font-reg text-light relative max-w-120 m-auto selection:bg-gold selection:text-light">
      <Cookies/>
       <Modal/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/"/>
          <Route exact path="/connect" component={Connect} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/project/:id" component={Project}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
