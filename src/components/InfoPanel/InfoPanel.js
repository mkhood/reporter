import React, { Component } from 'react';
import styled from 'styled-components';
import TimeConverter from '../TimeConverter/TimeConverter';
// import DateConverter from '../DateConverter/DateConverter';

const StyledSummaryPanel = styled.div`
        padding: 20px;
        margin: 60px 0px 20px 40px;
        width: 420px;
        height: 240px;
        text-decoration: none;
        border-radius: 15px;
        border: none;
        color: ${({theme}) => theme.colors.grey};
        font-size: .875rem;
        background-color: ${({theme}) => theme.colors.bluetable};      

    ul.infoPanel {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    ul.infoPanel li {
        padding: 10px 12px 10px 12px;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        width: 380px;
    }    

    .summaryPassed {
        color: ${({theme}) => theme.colors.green};
        float: right;
    }

    .summaryNormal {
        color: ${({theme}) => theme.colors.grey};
        float: right;
    }

    .summaryFailed {
        color: ${({theme}) => theme.colors.red};
        float: right;
    }

    .summarySkipped {
        color: ${({theme}) => theme.colors.yellow};
        float: right;
    }

    .summaryPending {
        color: ${({theme}) => theme.colors.white};
        float: right;
    }
  `;  

const StyledInfoPanelLeft = styled.div`
        grid-column-start: 2;
        float: left;
`;

const StyledInfoPanelRight = styled.div`
        grid-column-start: 2;
        float: left;
`;  

class InfoPanel extends Component {

    render() {

        const { reportData } = this.props

        return reportData === null ? (
            <h2>Loading</h2>
          ) : (
            <>
            <StyledInfoPanelLeft>
                <StyledSummaryPanel>
                    <ul className="infoPanel">
                        <li>Tests runned: <span className="summaryNormal">{reportData.stats.tests}</span></li>
                        <li>Passed: <span className="summaryPassed">{reportData.stats.passes}</span></li>
                        <li>Failed: <span className="summaryFailed">{reportData.stats.failures}</span></li>
                        <li>Skipped: <span className="summarySkipped">{reportData.stats.skipped}</span></li>
                        <li>Pending: <span className="summaryPending">{reportData.stats.pending}</span></li>
                    </ul>
                </StyledSummaryPanel>
            </StyledInfoPanelLeft>
            <StyledInfoPanelRight>
                <StyledSummaryPanel>
                    <ul className="infoPanel">
                        <li>Feature files: <span className="summaryNormal">{reportData.stats.suites}</span></li>          
                        <li>Duration: <span className="summaryNormal"><TimeConverter timeValue={reportData.stats.duration}></TimeConverter></span></li>
                        <li>Start time: <span className="summaryNormal">{reportData.stats.start}</span></li>
                        {/* <li><DateConverter ></DateConverter></li> */}
                        <li>End time: <span className="summaryNormal">{reportData.stats.end}</span></li>
                    </ul>
            </StyledSummaryPanel>        
            </StyledInfoPanelRight>
            </>
            )
        }
}

//   InfoPanel.defaultProps = {
//     passes: 'no data provided',
//     failures: 'no data provided',
//     skipped: 'no data provided',
//     pending: 'no data provided',
//     suites: 'no data provided',
//     tests: 'no data provided',
//     duration: 'no data provided',
//     start: 'no data provided',
//     end: 'no data provided'
//   };
  
  export default InfoPanel;