// import React, { Component, useState } from 'react';
// import styled from 'styled-components';
// import { connect } from 'react-redux';

// const PaginationWrapper = styled.div`
//     .pagination_panel {
//         width: 100%;
//         height: 40px;
//         margin: 20px 0 30px 0;
//         padding: 0;
//         float: left;
//         list-style: none;
//         display: block;
//     }

//     .pagination_panel ul {
//         list-style: none;
//         display: block;
//     }
    
//     .pagination_panel ul li {
//         float: left;
//         // background-color: ${({theme}) => theme.colors.graydark};
//         color: ${({ theme }) => theme.colors.pinksecond};
//         border: 1px solid ${({theme}) => theme.colors.pinksecond};
//         line-height: 1;
//         font-size: 18px;
//         margin: 5px;
//         padding: 5px;
//         user-select: none;
//         cursor: pointer;
//     }   
// `;


// class Pagination extends React.Component {
//     constructor() {        
//       super();      
//       this.state = {
//         cards: [],
//         currentPage: 1,
//         cardsPerPage: 5
//       };
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(event) {
//       this.setState({
//         currentPage: Number(event.target.id)
//       });
//     }

//     render() {
//     // console.log(this.props.singleReport.data, "PPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
      
//       this.state.cards = this.props.singleReport.data;
//       const { cards, singleReport, currentPage, cardsPerPage } = this.state;

//       const indexOfLastItem = currentPage * cardsPerPage;
//       const indexOfFirstItem = indexOfLastItem - cardsPerPage;
//       const currentItem = cards.slice(indexOfFirstItem, indexOfLastItem);

//       const renderCards = currentItem.map((todo, index) => {
//         return <li key={index}>{todo}</li>;
//       });


//       const pageNumbers = [];
//       for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
//         pageNumbers.push(i);
//       }

//       const renderPageNumbers = pageNumbers.map(number => {
//         return (
//           <li
//             key={number}
//             id={number}
//             onClick={this.handleClick}
//           >
//             {number}
//           </li>
//         );
//       });

//       return (
//         <PaginationWrapper>
//         <div>
//           {/* <ul>
//             {renderCards}
//           </ul> */}
//           <ul id="page-numbers">
//             {renderPageNumbers}
//           </ul>
//         </div>
//         </PaginationWrapper>
//       );
//     }
//   }

//   const mapStateToProps = state => {
//     return {
//       singleReport: state.data,
//       report: state.report
//     }
//   }
  
// export default connect(mapStateToProps)(Pagination);  