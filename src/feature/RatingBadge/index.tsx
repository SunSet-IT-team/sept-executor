import React from 'react';
import {Box, Typography, styled} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const RatingBadge = () => {
    return (
        <StyledContainer>
            <StarIcon sx={{color: '#FFD700', fontSize: '18px'}} />
            <Typography variant="body2" sx={{fontWeight: 600, ml: 0.5}}>
                4.9
            </Typography>
            <Typography variant="body2" sx={{color: 'text.secondary', ml: 0.5}}>
                85 оценок
            </Typography>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '8px 16px',
    boxShadow: theme.shadows[1],
}));

export default RatingBadge;
