import React, { Component } from 'react';
import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';
import FeatureTableHeader from './FeatureTableHeader/FeatureTableHeader';
import FeatureTableRow from './FeatureTableRow/FeatureTableRow';
import TimeConverter from '../TimeConverter/TimeConverter';

const StyledWrapper = styled.div`
        padding: 0;
        margin: 40px;
        border-radius: 5px;
        width: 95%;        
        color: ${({theme}) => theme.colors.grey};
        font-size: 14px;
        background-color: ${({theme}) => theme.colors.dark};

    .FeatureSummaryTable {        
        border-collapse: collapse;
        margin: 0;
        width: 100%;        
    }

    .FeatureSummaryTable tr {
        border-top: 1px solid hsla(0,0%,100%,.1);
    }

    .FeatureSummaryTable td, .FeatureSummaryTable th {
        border: 0;
        margin: 0;
        padding: 15px 20px 15px 20px;
    }

    .FeatureSummaryTable tr:nth-child(even) {
        background-color: ${({theme}) => theme.colors.dark}
    }
      
    .FeatureSummaryTable th {
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        padding: 15px 20px 15px 20px;
        text-align: left;
        background-color: ${({theme}) => theme.colors.dark};
        color: ${({theme}) => theme.colors.grey};
    }
`;

const StyledHeadingWrapper = styled.div`
    padding: 20px 0 20px 0;
`;

const FailedMark = styled.p`
    color: ${({theme}) => theme.colors.red};
    font-size: 14px;
    font-weight: bold;
    padding: 0;
    marging: 0;
`;

const SuccessMark = styled.p`
    color: ${({theme}) => theme.colors.green};
    font-size: 14px;
    font-weight: bold;
    padding: 0;
    marging: 0;
`;

const ScreenshotsMark = styled.p`
    border: 1px solid ${({theme}) => theme.colors.yellow};
    color: ${({theme}) => theme.colors.yellow};
    font-size: 12px;
    font-weight: bold;
    padding: 1px;
    marging: 0;
    width: 22px;  
    hight: 22px;
`;

const MovieMark = styled.p`
    border: 1px solid ${({theme}) => theme.colors.orange};
    color: ${({theme}) => theme.colors.orange};
    font-size: 12px;
    font-weight: bold;
    padding: 1px;
    marging: 0;
    width: 22px;  
    hight: 22px;

`;

class FeatureTable extends Component {

    render() {
    
        const { reportData } = this.props
    
        return reportData === null ? (
            <h2>Loading</h2>
            ) : (
                <StyledWrapper>

                <StyledHeadingWrapper>
                <Heading>Feauture files list</Heading>
                <Heading h2>All feautures</Heading>
                </StyledHeadingWrapper>
                    <table className="FeatureSummaryTable">
                        <FeatureTableHeader/>
                            <tbody>
                            <tr>
                                <td>{reportData.results[0].suites[0].title}</td>
                                <td><FailedMark>&#x274C;</FailedMark></td>
                                <td><TimeConverter timeValue={reportData.results[0].suites[0].duration}></TimeConverter></td>
                                <td><ScreenshotsMark>&#9658;</ScreenshotsMark></td>
                                <td><MovieMark>&#9658;</MovieMark></td> 
                            </tr>
                            <tr>
                                <td>{reportData.results[1].suites[0].title}</td>
                                <td><FailedMark>&#x274C;</FailedMark></td>
                                <td><TimeConverter timeValue={reportData.results[0].suites[0].duration}></TimeConverter></td>
                                <td><ScreenshotsMark>&#9658;</ScreenshotsMark></td>
                                <td><MovieMark>&#9658;</MovieMark></td>                                
                            </tr>                              
                            </tbody>

                            {/* <tbody>
                            { reportData.results.map(result => (
                               result.suites[0].tests.map(test => ( 
                                  <FeatureTableRow
                                      title={test.title}
                                      status={test.state}
                                      duration={test.duration}
                                      error={test.err}
                                  />
                                  )
                            )))}    
                        </tbody> */}
                    </table>                   
                </StyledWrapper>
            )
        }
}

export default FeatureTable;