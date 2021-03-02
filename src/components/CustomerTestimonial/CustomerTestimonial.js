import React, {useState, useEffect, useRef} from 'react';

import styled from 'styled-components'

import SmallTitleText from '../Text/SmallTitleText';
import BodyText from '../Text/BodyText';

import Img from '../../img/avatar-ali.png';

import useMediaQuery from '@material-ui/core/useMediaQuery';


const StyledDiv = styled.div.attrs(props => ({
    profileIconMargin: (props.isSmall) ? "-100px 0 0 0" : "-55px 0 0 0",
    containerWidth: (props.isSmall) ? "350px":"545px",
    containerHeight: (props.isSmall) ? "290px":"222px",
}))`
    &.container {
        width: ${props => props.containerWidth};
        height: ${props => props.containerHeight};
        background-color: hsl(0, 0%, 98%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
    }

    .center-text {
        text-align:center;
    }

    .profile-icon-container {
        margin: ${props => props.profileIconMargin};
    }

    .profile-icon {
        width: 70px;
        height: 70px;
        border-radius: 40px;
    }

    .ptext-container {
        display: flex;
        justify-content: center;
        width: 90%;
    }
`;

const CustomerTestimonial = () => {
    // const [smTitTxtHght, setsmTitTxtHght] = useState(0);
    // const titTxtRef = useRef(null);
    // const bodyTxtRef = useRef(null);

    // useEffect(() => {
    //     const totHeight = titTxtRef.current.height + bodyTxtRef.current.current.height;
    //     setsmTitTxtHght(totHeight);
    // })
    const matches = useMediaQuery('(max-width:375px)');

    return (
        <StyledDiv className="container" isSmall={matches}>
            <div className="profile-icon-container">
                <div className="profile-icon">
                    <img src={Img} width="70" height="70" alt="profileIcon"/>
                </div>
            </div>
            <div>
                <SmallTitleText
                    text={`Ali Bravo`}
                />
            </div>
            <div className="ptext-container center-text">
                <BodyText
                    text={"“We have been able to cancel so many other subscriptions since using Manage. The is no more cross-channel confusion and everyone is much more focused"}
                />
            </div>
        </StyledDiv>
    )
}

export default CustomerTestimonial;
