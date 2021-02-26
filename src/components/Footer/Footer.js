import React from 'react';
import FooterIconCarousel from '../FooterIconCarousel/FooterIconCarousel';
import Logo from '../Logo/Logo';
import { Default } from '../Logo/Logo.stories';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import styled from 'styled-components';

const StyledDiv = styled.div.attrs(props => ({
    socialMedia:{
        width: (props.isSmall) ? '100%':'50%' ,
    },
    footerRow:{
        width:(props.isSmall) ? '100%':'40%' ,
    }
}))`
    &.footer-container {
        display:flex;
        justify-content:center;
        align-items:center;
        background:hsl(233, 12%,13%);
        padding 10px 10px 10px 10px;
        height:250px;
    }
    .content-container {
        justify-content:space-between;
        width:80%;
        padding: 20px 0;
    }

    .social-media-sec {
        width:${props => props.socialMedia.width};
        flex-direction:column;
        display:flex;
    }

    .logo-div {
        padding: 0 0 40px 0;
    }

    .logo-div-mobile {
        padding: 40px 0 20px 0;
        justify-content: center;
        display: flex;
        order: 2;
    }

    .footer-div {
        width:${props => props.footerRow.width};
        padding: 40px 0 20px 0;
    }

    .footer-div-mobile {
        padding: 20px 0 20px 0;
    }
`;
const Footer = () => {

    const matches = useMediaQuery('(max-width:375px)');
    
    return (
        <StyledDiv className="footer-container" isSmall={matches}>
            <div className="content-container">
                <div className="social-media-sec">
                    <div className={matches ? "logo-div logo-div-mobile" : "logo-div"}>
                        <Logo
                            width={160}
                            height={32}
                            fill={'#fff'}
                        />
                    </div>
                    <div className={matches ? "footer-div footer-div-mobile" : "footer-div"}>
                        <FooterIconCarousel/>
                    </div>
                    
                </div>
                <div></div>
            </div>
            
        </StyledDiv>
    )
}

export default Footer;