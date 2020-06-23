import React, { Component, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '../layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Card from '../components/Card/Card';
import { selectFile } from '../redux/report/reportActions';
import { fetchCardsData } from '../redux/cards/cardsActions';
import { fetchResultsList } from '../redux/result/resultsListActions';
// import Pagination from '../components/Pagination/Pagination';


class ResultsListContainer extends Component {

  constructor() {        
    super(); 
    this.state = {
      cards: [],
      currentPage: 1,
      cardsPerPage: 20
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {  
                     
    if ( this.props.report.isCurrentReportSet === false ) {
      this.props.fetchResultsList()
    }
  }

  render() {

    this.state.cards = this.props.singleReport.data;
    const { cards, currentPage, cardsPerPage } = this.state;

    const indexOfLastItem = currentPage * cardsPerPage;
    const indexOfFirstItem = indexOfLastItem - cardsPerPage;
    const currentItem = cards.slice(indexOfFirstItem, indexOfLastItem);

    const renderCards = currentItem.map((data, index) => {             
            return <Card title={data} />
    });

    const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
        pageNumbers.push(i);
      }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

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
                <div className="cards_pannel">
                  { renderCards }
                </div>
                <div className="pagination_panel">
                  <ul>
                    {/* <Pagination></Pagination> */}
                    { renderPageNumbers}
                  </ul>
              </div>
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
