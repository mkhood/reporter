import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '../layout/Layout';
import { fetchReportData } from '../redux/report/reportActions';
import Sidebar from '../components/Sidebar/Sidebar'
import InfoPanel from '../components/InfoPanel/InfoPanel';
import FeatureTable from '../components/FeatureTable/FeatureTable';
import Table from '../components/Table/Table';

class SingleReportContainer extends Component {

  componentDidMount() {
      this.props.fetchReportData(this.props.report.selectedFile)    
  }

  render() {
    return (
      <>
       <Layout>
        <div className="wrapper">
          <div className="sidebar_wrapper">
            <Sidebar />
          </div>
          <div>
            <InfoPanel reportData={this.props.report.currentReportData} />
          </div>
          <div className="tables_wrapper">
            <FeatureTable reportData={this.props.report.currentReportData} />
            <Table reportData={this.props.report.currentReportData} />
          </div>
        </div>
      </Layout>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    report: state.report
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    fetchReportData: fetchReportData
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleReportContainer);
