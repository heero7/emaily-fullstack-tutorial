import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// COMPONENTS
import Header from './Header';
// dummy components
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/survey/new" component={SurveyNew} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
