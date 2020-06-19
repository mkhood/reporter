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

const ErrorMark = styled.p`
    // border: 1px solid ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.white};
    font-size: 18px;
    font-weight: bold;
    padding: 2px;
    marging: 0;
    width: 30px;  
    hight: 30px;
`;

class TableRow extends Component {

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
                    <td><ErrorMark><span role="img" aria-label="error">&#9729;</span></ErrorMark></td>
                </tr>                      
              )
            }
}

export default TableRow;
