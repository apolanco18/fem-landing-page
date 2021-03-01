import React from "react";

import Grid from '@material-ui/core/Grid';
import FeatureDescription from '../FeatureDescription/FeatureDescription'
import P2Left from '../P2/P2Left';

import useMediaQuery from '@material-ui/core/useMediaQuery';


import styled from 'styled-components';





const StyledDiv = styled.div`
    &.container {
        width:80%
    }


    .grid-container {
        display:flex;
        justify-content:center; 
    }

    .move-second {
        order:2
    }

`;
const P2 = () => {
    const matches = useMediaQuery('(max-width:375px)');

    const width = (matches) ? 350 : 598
    const height = (matches) ? 300 : 491
    return (
        <StyledDiv className="container">
            <Grid container >
                <Grid item  xs={12} lg={6}>
                    <P2Left/>
                </Grid>
                <Grid item className="grid-container" xs={12} lg={5}>
                    <FeatureDescription/>
                </Grid>     
            </Grid>
        </StyledDiv>

    )
}

export default P2;