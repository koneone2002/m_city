import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoutes from './Components/authRoutes/PrivateRoutes';
import PublicRoutes from './Components/authRoutes/PublicRoutes';

import Home from './Components/home';
import SignIn from './Components/signin';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/not_Found';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/Matches';
import AddEditMatch from './Components/admin/Matches/addEditMatch';
import AdminPlayers from './Components/admin/Players';
import AddEditPlayers from './Components/admin/Players/addEditPlayers';

const Routes = (props) => {
  return(
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
        <PrivateRoutes {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
        <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers}/>
        <PrivateRoutes {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches}/>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoutes {...props} restricted={true} path="/sign_in" exact component={SignIn}/> 
        <PublicRoutes {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
        <PublicRoutes {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home}/>
        <PublicRoutes {...props} restricted={false} component={NotFound}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
