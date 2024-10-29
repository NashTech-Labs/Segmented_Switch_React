import React, { useState } from 'react';
import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { createTheme } from '@mui/material/styles';

interface ISwitchProps {
    switchNames: string[];
}

export const formatSwitchName = (switchName: string): string => {
    if (!switchName) return '';
    return switchName.charAt(0).toUpperCase() + switchName.slice(1).toLowerCase();
};

const customTheme = createTheme({
    components: {
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    border: '1px solid lightgrey',
                    backgroundColor: '#efefef',
                    borderRadius: '8px',
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    fontSize: '16px',
                    fontWeight: '500',
                    padding: '4px 16px',
                    color: '#303030',
                    border: 'none',
                    borderRadius: '8px',
                    '&.Mui-selected': {
                        margin: '1px',
                        backgroundColor: '#1f1f1f',
                        color: '#ffffff',
                        fontSize: '16px',
                        fontWeight: '400',
                        borderRadius: '8px !important',
                        '&:hover': {
                            backgroundColor: '#1f1f1f',
                        },
                    },
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                    },
                },
            },
        },
    },
});

function SegmentedSwitch({ switchNames }: ISwitchProps) {
    const [value, setValue] = useState(switchNames[0]);

    const handleValueChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        if (newAlignment !== null) {
            setValue(newAlignment);
        }
    };

    return (
        <>

            <ThemeProvider theme={customTheme}>
                <ToggleButtonGroup value={value} size="small" exclusive onChange={handleValueChange} aria-label="Platform">
                    {switchNames.map((switchName) => {
                        return (
                            <ToggleButton value={switchName.toLowerCase()} disableTouchRipple>
                                {formatSwitchName(switchName)}
                            </ToggleButton>
                        )
                    })}
                </ToggleButtonGroup>
            </ThemeProvider>
        </>
    );
}

export default SegmentedSwitch;
