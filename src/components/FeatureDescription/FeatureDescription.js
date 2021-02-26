import React from 'react';
import SmallButton from '../Button/SmallButton'
import SmallTitleText from '../Text/SmallTitleText'
import BodyText from '../Text/BodyText';

import styled from 'styled-components';

const StyledUl = styled.ul`
    &.ul-style {
        list-style:none;
    }

    &.ul-style li {
        margin-top 25px;
    }

    .company-obj-list{
        display:flex;

    }
    .small-button-container {
        justify-content: flex-start;
        align-items: center;
        display: flex;
        width: 35%;
    }
    .main-title-container {
        flex-grow: 1;
    }
    .body-text-container {
        display:flex;
        justify-content:flex-end;
    }
    .body-text-width {
        width:65%
    }

`;

const FeatureDescription = () => {

    const dummyData = [
        {
            buttonName:"01",
            titleText:"Track company-wide progress",
            bodyText:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again"
        },
        {
            buttonName:"01",
            titleText:"Track company-wide progress",
            bodyText:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again"
        },
        {
            buttonName:"01",
            titleText:"Track company-wide progress",
            bodyText:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again"
        }
    ]
    return (
        <div>
            <StyledUl className="ul-style">
                {
                    dummyData.map(cell => (
                        <li>
                            <div className="company-obj-list">
                                <div className="small-button-container">
                                    <SmallButton
                                        buttonName={cell.buttonName}
                                    />
                                </div>
                                <div className="main-title-container">
                                    <SmallTitleText
                                        text={cell.titleText}
                                    />
                                </div>
                            </div>
                            <div className="body-text-container">
                                <div className="body-text-width">
                                    <BodyText
                                        text={cell.bodyText}
                                    />
                                </div>
                            </div>
                        </li>
                    ))
                }
            </StyledUl>
        </div>
    )
}

export default FeatureDescription;