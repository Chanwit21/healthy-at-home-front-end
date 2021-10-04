import { Switch, Route, Redirect } from 'react-router-dom';
import './Global.css';
import React from 'react';
import FooterComponent from './Component/FooterComponent/FooterComponent';
import NavComponent from './Component/NavComponent/NavComponent';
import { routesAll } from './routes/routes';
import { user as stateUser } from './service/localStorage';

function App() {
  const user = stateUser ? stateUser.role : 'GUEST';
  // console.log(user);

  return (
    <>
      <NavComponent />
      <Switch>
        {routesAll[user].routes.map((component) => {
          return <Route key={component.path} exact path={component.path} component={component.component} />;
        })}
        <Redirect to={routesAll[user].redirect} />
      </Switch>
      {/* Space Bottom */}
      <div style={{ marginBottom: '2.083333333333333vw' }}></div>
      <FooterComponent />
    </>
  );
}

export default App;
