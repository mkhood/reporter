import React, { Component } from 'react';
import styled from 'styled-components';
import TimeConverter from '../../TimeConverter/TimeConverter';

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

class FeatureTableRow extends Component {

    render() {
    
        const { title, status, duration } = this.props
    
        return ( 
            <tr>
                <td>{ title }</td>
                <td>
                    { status === 'passed' ? (
                        <SuccessMark><span role="img" aria-label="success">&#x2714;</span></SuccessMark>
                            ) : (<FailedMark><span role="img" aria-label="failed">&#x274C;</span></FailedMark>) }
                </td>
                <td><TimeConverter timeValue={duration}></TimeConverter></td>
                <td><ScreenshotsMark><span role="img" aria-label="sreenshots">&#9658;</span></ScreenshotsMark></td>
                <td><MovieMark><span role="img" aria-label="movie">&#9658;</span></MovieMark></td>
            </tr>                      
              )
            }
}

export default FeatureTableRow;