import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const labelStyles: SxProps<Theme> = {
    mb: 1,
    fontWeight: 500,
    fontSize: "1rem"
};

export const requiredAsteriskStyles = {
    color: 'red',
    marginLeft: '2px',
    marginTop: '-10px',
};

export const textFieldStyles: SxProps<Theme> = {
    '& .MuiInputBase-input': {
        padding: '10px',
    },
};