import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from './components/game_logic';
import FrontPage from './components/front_page';
import Logout from './components/logout';
import UserProfile from './components/user_profile';
import GameSetup from './components/game_setup';
import Results from './components/results';
import StatsDetail from './components/statsdetail';
import DetailResults from './components/detail_results';
import StatsPlot from './components/stats_plot';
import PlotParent from './components/plot_parent';

function App(){


  
 return(
   <div className="main">
      <Router>
        
          <Routes>
              <Route path = "/game-setup" element={<GameSetup />}> </Route>
              <Route path = "/game" element={<Game />}> </Route>
              <Route path = "/logout" element={<Logout />}> </Route>
              <Route path = "/home" element={<UserProfile />}> </Route>
              <Route path = "/" element={<FrontPage />}> </Route> 
              <Route path = "/results" element={<Results />}> </Route>
              <Route path = "/detailresults" element={<DetailResults />}></Route>
              <Route path = "/statsdetail" element={<StatsDetail />}></Route>
              <Route path = "/statsplot" element={<StatsPlot />}></Route>
              <Route path = "/plotparent" element={<PlotParent />}></Route>
            
          </Routes>
        
      </Router>
    </div>
  
  );
}

export default App


