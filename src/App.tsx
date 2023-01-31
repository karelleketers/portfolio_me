import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import { Home, Connect, Projects, Project, NotFound} from './app/components/pages';
import { Modal } from './app/components/layout';
import { Cookies } from './app/components/components'

const App = () => {
  return (
    <div className="font-reg text-light relative max-w-120 m-auto selection:bg-gold selection:text-light">
      <Cookies/>
      <Modal/>
      <Routes>
        <Route path="/" element={
          <Home/>
        }></Route>
        <Route path="/connect" element={
          <Connect/>
        }></Route>
        <Route path="/projects" element={
          <Projects/>
        }></Route>
        <Route path="/project/:id" element={
          <Project/>
        }></Route>
        <Route path="*" element={
          <NotFound/>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
