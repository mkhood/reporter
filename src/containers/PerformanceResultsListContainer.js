import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';

class PerformanceResultsListContainer extends Component {

  render() { 
    return (          
    <>
    <Layout>
        <div className="wrapper">
            <div className="sidebar_wrapper">
                <Sidebar />
            </div>
            <div className="infoPanel_box2">
                <p>jMeter report files</p>
            </div>
        </div>
    </Layout>
    </>
    )
  }
}

export default PerformanceResultsListContainer;
