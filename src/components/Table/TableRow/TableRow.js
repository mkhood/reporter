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
                    <td>{title}</td>
                    <td>
                      {status === 'passed' ? (
                        <SuccessMark>&#x2714;</SuccessMark>
                          ) : (<FailedMark>&#x274C;</FailedMark>)}
                    </td>
                    <td><TimeConverter timeValue={duration}></TimeConverter></td>
                    <td><ErrorMark>&#9729;</ErrorMark></td>
                </tr>                      
              )
            }
}

export default TableRow;
