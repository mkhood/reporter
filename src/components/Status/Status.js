import React, { Component } from 'react';
import styled from 'styled-components';

const TestsCount = styled.div`
        float: left;
        padding: 5px;
        margin: 0;          
        color: ${({theme}) => theme.colors.gray};
        font-size: 10px;
`;

const TestRunFailed = styled.div`
        float: right;        
        width: 10px;
        height: 10px;
        padding: 0;
        margin: 5px 5px 5px 0;
        border-radius: 5px;     
        color: ${({theme}) => theme.colors.grey};
        background-color: ${({theme}) => theme.colors.red};
        font-size: 8px;
        text-decoration: none !important;
        justify-content: center;
        align-items: center;
`;

const TestRunPassed = styled.div`
        float: right;        
        width: 10px;
        height: 10px;
        padding: 0;
        margin: 5px 5px 5px 0;
        border-radius: 5px;     
        color: ${({theme}) => theme.colors.grey};
        background-color: ${({theme}) => theme.colors.green};
        font-size: 8px;
        text-decoration: none !important;
        justify-content: center;
        align-items: center;
`;

class Status extends Component {

    render() {
        
        const { title } = this.props;

        return (
            <div>
               { this.props.title > 0 
                    ? <>
                      <TestsCount>0/0</TestsCount>
                            <TestRunFailed></TestRunFailed>
                      </>
                      : <>
                        <TestsCount>0/0</TestsCount>
                            <TestRunPassed></TestRunPassed>
                        </> }
            </div>
          )
    }
}

export default Status;