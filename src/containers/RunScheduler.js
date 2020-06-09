import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '../layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Heading from '../components/Heading/Heading';

var CronJob = require('cron').CronJob;

class RunScheduler extends Component {

  render() { 

      console.log('Before job instantiation');
      
      var job = new CronJob('* * * * * *', function() {
        console.log('Cron is run every second');
      }, null, true, 'America/Los_Angeles');
      job.start();

  
    return (
    <>
    <Layout>
        <div className="wrapper">
            <div className="sidebar_wrapper">
                <Sidebar />
            </div>
            <div className="infoPanel_box2">
              <div></div>
                <Heading h2>Tests will be run after every 1 sec from now</Heading>
            </div>
        </div>
    </Layout>
    </>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//   }
// }

function matchDispatchToProps(dispatch){
  return bindActionCreators({
  }, dispatch);
}

export default connect(matchDispatchToProps)(RunScheduler);
