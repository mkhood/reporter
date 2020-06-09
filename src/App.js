import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import ResultsListContainer from './containers/ResultsListContainer';
import SingleReportContainer from './containers/SingleReportContainer';
import RunScheduler from './containers/RunScheduler';

const App = () => (
<Layout>
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={ResultsListContainer} />
          <Route path="/report" component={SingleReportContainer} />
          <Route path="/cron" component={RunScheduler} />
          {/* <Route exact path="/report/:id" component={(props) => <SingleReportContainer {...props} />} /> */}
      </Switch>
  </BrowserRouter>
</Layout>
)

export default App
