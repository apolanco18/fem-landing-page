import React from 'react';
import FooterIconCarousel from '../FooterIconCarousel/FooterIconCarousel';
import Logo from '../Logo/Logo';
import { Default } from '../Logo/Logo.stories';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import BtnText from '../Text/BtnText'

const StyledDiv = styled.div.attrs(props => ({
    socialMedia:{
        width: (props.isSmall) ? '100%':'30%' ,
    },
    footerRow:{
        width:(props.isSmall) ? '100%':'60%' ,
    },
    contentCont: {
        direction: (props.isSmall) ? 'column' : 'row'
    },
    gridCont: {
        width: (props.isSmall) ? '100%':'45%' ,
    },
    footerContainer:{
        height:(props.isSmall) ? '440px':'250px',
    },
}))`
    &.footer-container {
        display:flex;
        justify-content:center;
        align-items:center;
        background:hsl(233, 12%,13%);
        padding 10px 10px 10px 10px;
        height:${props => props.footerContainer.height}; 
    }
    .content-container {
        width:80%;
        padding: 20px 0;
        flex-direction: ${props => props.contentCont.direction};
        display: flex;
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
        padding: 40px 0 0 0;
    }

    .footer-div-mobile {
        padding: 20px 0 20px 0;
    }

    .footer-txt-container {
        margin-bottom:15px;
    }

    .grid-cont {
        width:${props => props.gridCont.width};
    }

    .second {
        order:2
    }

    .last {
        order:3
    }
`;
const Footer = () => {

    const matches = useMediaQuery('(max-width:375px)');
    const btnTxtProps = {
        color:"#fff",
        opac:1,
        hovColor:"hsl(12, 88%, 59%)",
    }

    const btnTxtData = [
        {
            txt:"Home",
            isLast:false,
        },
        {
            txt:"Careers",
            isLast:false,
        },
        {
            txt:"Pricing",
            isLast:false,
        },
        {
            txt:"Community",
            isLast:false,
        },
        {
            txt:"Products",
            isLast:false,
        },
        {
            txt:"Privacy Policy",
            isLast:false,
        },
        {
            txt:"About Us",
            isLast:true,
        },
    ]
    
    return (
        <StyledDiv className="footer-container" isSmall={matches}>
            <div className="content-container">
                <div className={`social-media-sec ${matches ? 'last' : ''}`}>
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
                <div className={`grid-cont ${matches ? 'second' : ''}`}>
                    <Grid container>
                        {
                            btnTxtData.map(data => (
                                <Grid item xs={6} className={`${data.isLast ? '' : 'footer-txt-container'}`}>
                                    <BtnText
                                        text={data.txt}
                                        {...btnTxtProps}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>

                </div>
                <div>Helo</div>
            </div>
            
        </StyledDiv>
    )
}

export default Footer;