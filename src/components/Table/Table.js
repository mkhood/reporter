import React, { Component } from 'react';
import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';

const StyledWrapper = styled.div`
      margin: 40px;
      padding: 20px 0 0 0;
      width: 95%;
      border-radius: 5px;
      border: none;
      color: ${({theme}) => theme.colors.grey};
      float: left;    
      background-color: ${({theme}) => theme.colors.bluetable};
      border-bottom: 1px solid hsla(0,0%,100%,.1); 

    .testRunSummaryTable {
      border-collapse: collapse;
      width: 100%;
    }

    .testRunSummaryTable td, .testRunSummaryTable th {
      border: 0;
      padding: 10px;
    }

    .testRunSummaryTable tr:nth-child(even) { 
      background-color: ${({theme}) => theme.colors.dark}
    }
      
    .testRunSummaryTable th {
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: left;
      background-color: ${({theme}) => theme.colors.dark};
      color: ${({theme}) => theme.colors.grey};
    }   
`;

const StyledHeadingWrapper = styled.div`
    padding: 20px 0 20px 0;
`;

class Table extends Component {

  render() {

    const { reportData } = this.props 
    return reportData === null ? (
      <h2>Loading</h2>
      ) : (
        <StyledWrapper>
              <StyledHeadingWrapper>
                <Heading>List of all tests</Heading>
                <Heading h2>All tests from feature files</Heading>
              </StyledHeadingWrapper>
                  <table className="testRunSummaryTable">
                    <TableHeader/>
                        <tbody>
                            { reportData.results.map(result => (          
                               result.suites[0].tests.map(test => ( 
                                  <TableRow
                                      title={test.title}
                                      status={test.state}
                                      duration={test.duration}
                                      error={test.err}
                                  />
                                  )
                            )))}      
                        </tbody>  
                  </table>
          </StyledWrapper>
              )
            }
}

export default Table;