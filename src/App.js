import { Switch, Route, Redirect } from 'react-router-dom';
import './Global.css';
import React from 'react';
import FooterComponent from './Component/FooterComponent/FooterComponent';
import NavComponent from './Component/NavComponent/NavComponent';
import { routesAll } from './routes/routes';
import { useUserContext } from './contetext/Usercontext';

function App() {
  const {
    state: { user: stateUser },
  } = useUserContext();
  const role = stateUser ? stateUser.role : 'GUEST';
  // console.log(user);

  return (
    <>
      <NavComponent />
      <Switch>
        {routesAll[role].routes.map((component) => {
          return <Route key={component.path} exact path={component.path} component={component.component} />;
        })}
        <Redirect to={routesAll[role].redirect} />
      </Switch>
      {/* Space Bottom */}
      <div style={{ marginBottom: '2.083333333333333vw' }}></div>
      <FooterComponent />
    </>
  );
}

export default App;
