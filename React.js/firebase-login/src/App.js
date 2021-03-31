import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout'
import LoginForm from './components/auth/LoginForm'


function App() {
  return (
    <Router>
      <Switch>
        <Layout>
         <Route path="/login"> <LoginForm />
          
         </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
