import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cardIconPng from '../../layout/icons/report_icon.png';

const CardWrapper = styled.div`
    display: flex;
    padding: 20px;
    margin: 40px 40px 0 0;
    width: 170px;
    height: 170px;
    justify-content: center;
    align-items: center;
    float: left;
    font-size: 13px;
    text-decoration: none;
    border-radius: 0;
    border: 1px solid ${({theme}) => theme.colors.pinkdlackdash};
    background-color: ${({theme}) => theme.colors.bluetable};
    color: ${({theme}) => theme.colors.grey};                   

    .Card a {
        text-decoration: none !important;
        color: ${({theme}) => theme.colors.pinkdlackdash};
        justify-content: center;
        align-items: center;
    }

    .Card li {
        text-decoration: none !important;
        color: ${({theme}) => theme.colors.pinkdlackdash};
    }
`;

const CardIcon = styled.div`
    display: block;
    width: 20px;
    height: 21px;
    background-image: url(${cardIconPng});
    background-repeat: no-repeat;
    border: none;
    margin: 0 0 10px 40px;
    padding: 0px;
    text-align: center;
    vertical-align: middle;
`;

class Card extends Component {

    render() {
        
        const { title } = this.props;
        // const reportName = title.substr(7, 10)
        // const reportName = title.replace(/[a-zA-Z]+/g, '')

        return (
            <CardWrapper>     
                <div className="Card">
                    <CardIcon></CardIcon>
                    <Link to="/report">{ title.substr(7, 16) }</Link>
                </div>
            </CardWrapper>
          )
    }
} 

export default Card;