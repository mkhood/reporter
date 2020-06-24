import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cardIconPng from '../../layout/icons/report_icon.png';
import Status from '../../components/Status/Status';

const CardWrapper = styled.div`
    display: flex;
    padding: 0 0 20px 0;
    margin: 30px 30px 0 0;
    width: 170px;
    height: 170px;
    justify-content: center;
    align-items: top;
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

    .cardtop {
    display: top;
    width: 100px;
    height: 20px;
    background-color: ${({theme}) => theme.colors.pinkdlackdash};
    border: none;
    margin: 0;
    padding: 0px;
    text-align: center;
    vertical-align: middle;
    }
`;

const CardTop = styled.div`
    display: block top;
    width: 55px;
    height: 20px;
    background-color: ${({theme}) => theme.colors.graydark};
    border-radius: 20px;
    margin: 3px 3px 17px 110px;
    padding: 0px;
    text-align: center;
    vertical-align: right;
`;

const CardIcon = styled.div`
    display: block;
    width: 20px;
    height: 21px;
    background-image: url(${cardIconPng});
    background-repeat: no-repeat;
    border: none;
    margin: 40px 0 10px 75px;
    padding: 0px;
    text-align: center;
    vertical-align: middle;
`;

const CardText = styled.div`
    display: block;
    width: 20px;
    height: 21px;
    border: none;
    margin: 0 0 10px 35px;
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
                    <CardTop className="carttop"><Status></Status></CardTop>
                    <CardIcon className="cartIcon"></CardIcon>
                    <CardText><Link to="/report">{ title.substr(7, 16) }</Link></CardText>
                </div>
            </CardWrapper>
          )
    }
}

export default Card;