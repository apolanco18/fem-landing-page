import React from 'react';
import SmallButton from '../Button/SmallButton'
import SmallTitleText from '../Text/SmallTitleText'
import BodyText from '../Text/BodyText';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import styled from 'styled-components';

const StyledUl = styled.ul.attrs(props => ({
    padding: (props.isSmall) ? '0 0 0 0' : '0 0 0 40px',
    width: (props.isSmall) ? '100%' : '80%',
}))`
    &.ul-style {
        list-style:none;
        padding: ${props => props.padding};
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
        width: 20%;
    }
    .main-title-container {
        flex-grow: 1;
    }
    .body-text-container {
        display:flex;
        justify-content:flex-end;
    }
    .body-text-width {
        width:${props => props.width};
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
    const matches = useMediaQuery('(max-width:375px)');

    return (
        <div>
            <StyledUl className="ul-style" isSmall={matches}>
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