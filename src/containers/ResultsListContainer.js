import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '../layout/Layout';
import Card from '../components/Card/Card';
import { selectFile } from '../redux/report/reportActions';
import { fetchCardsData } from '../redux/cards/cardsActions';
import { fetchResultsList } from '../redux/result/resultsListActions';

import Sidebar from '../components/Sidebar/Sidebar';

class ResultsListContainer extends Component {

  componentDidMount() {   

    // fetchCardsData()
            
    if ( this.props.report.isCurrentReportSet === false ) {
      this.props.fetchResultsList()    
    }

  }

  render() { 

    return this.props.singleReport.loading ? (
      <h2>Loading</h2>
    ) : (
    <>
    <Layout>
        <div className="wrapper">
            <div className="sidebar_wrapper">
                <Sidebar />
            </div>
            <div className="infoPanel_box2">
                {this.props.singleReport.data.map(data => (
                    <div onClick={() => this.props.selectFile(data)}>                     
                        <Card
                          id={data}
                          title={data}
                        />
                    </div>
                ))}
            </div>
        </div>
    </Layout>
    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.data,
    singleReport: state.data,
    report: state.report
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    fetchResultsList: fetchResultsList,
    fetchCardsData: fetchCardsData,
    selectFile: selectFile
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ResultsListContainer);
