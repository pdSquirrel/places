import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Container } from "react-bootstrap";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/places/new' exact>
            <NewPlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
