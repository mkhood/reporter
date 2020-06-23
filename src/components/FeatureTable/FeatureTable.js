import React, { Component } from 'react';
import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';
import FeatureTableHeader from './FeatureTableHeader/FeatureTableHeader';
import FeatureTableRow from './FeatureTableRow/FeatureTableRow';

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
                                { reportData.results.map(result => (
                                    result.suites.map(suite => ( 
                                    <FeatureTableRow
                                        title={suite.title}
                                        status={suite.failures.length > 0 ? 'error' : 'passed'}
                                        duration={suite.duration}
                                        error={suite.err}
                                    />
                                    )
                                ))) }
                            </tbody>
                            </table>
                </StyledWrapper>
            )
        }
}

export default FeatureTable;