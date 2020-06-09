import React, { Component } from 'react';
import styled from 'styled-components';

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

class FeatureTableRow extends Component {

    render() {
    
        const { title, status, duration } = this.props
    
        return ( 
            <tr>
                <td>{title}</td>
                <td>
                    {status === 'passed' ? (
                        <SuccessMark>&#x2714;</SuccessMark>
                            ) : (<FailedMark><a href="/">&#x274C;</a></FailedMark>)}
                </td>
                <td>{duration}</td>
                <td>Icon1</td>
                <td>Icon2</td>
            </tr>                      
              )
            }
}

export default FeatureTableRow;