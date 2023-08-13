import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
const SideNav = () => {
    return (
        <Box
            sx={{ width: 150, height: '100vh', zIndex: '100000', backgroundColor: '#fff', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }}
            role="presentation"
        >
            <List sx={{ width: '90%' }}>
                <ListItem disablePadding >
                    <ListItemButton className='w-full flex flex-col justify-center items-center'>
                        <Box>
                            <DashboardOutlinedIcon sx={{ color: '#1C4980', fontSize: '20px' }} />
                        </Box>
                        <Typography sx={{ color: '#1C4980', fontSize: '14px' }} >Dashboard</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton className='w-full flex flex-col justify-center items-center'>
                        <Box>
                            <NoteAltOutlinedIcon sx={{ color: '#1C4980', fontSize: '20px' }} />
                        </Box>
                        <Typography sx={{ color: '#1C4980', fontSize: '14px' }} >My Library</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ border: '2px solid #0073E6', borderRadius: '10px' }}>
                    <ListItemButton className='w-full flex flex-col justify-center items-center'>
                        <Box>
                            <QuizOutlinedIcon sx={{ color: '#0073E6', fontSize: '20px' }} />
                        </Box>
                        <Typography sx={{ color: '#0073E6', fontSize: '14px' }} >Assessments</Typography>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider sx={{ width: '80%', borderTop: '1px dashed gray', borderBottom: 'none', borderColor: 'gray' }} />
            <List sx={{ width: '90%' }}>
                <ListItem disablePadding>
                    <ListItemButton className='w-full flex flex-col justify-center items-center'>
                        <Typography sx={{ color: 'red', fontSize: '14px', border: '2px solid red', borderRadius: '20px', padding: '2px 10px' }} >admin</Typography>
                        <Box>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#1C4980">
                                <mask id="mask0_0_1661" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                    <rect width="20" height="20" fill="#1C4980" />
                                </mask>
                                <g mask="url(#mask0_0_1661)">
                                    <path d="M10.2781 13.6835C9.7316 14.2278 9.06944 14.4965 8.29167 14.4896C7.51389 14.4826 6.85417 14.2071 6.3125 13.6631C5.77083 13.1191 5.5 12.4628 5.5 11.6944C5.5 10.9259 5.77326 10.2695 6.31979 9.72521L9.72188 6.31646C10.2684 5.77215 10.9306 5.50347 11.7083 5.51042C12.4861 5.51736 13.1458 5.79285 13.6875 6.3369C14.2292 6.88094 14.5 7.53719 14.5 8.30565C14.5 9.0741 14.2267 9.73049 13.6802 10.2748L10.2781 13.6835ZM7.375 12.6042C7.73611 12.9653 8.10147 13.0945 8.47108 12.992C8.84069 12.8894 9.09339 12.767 9.22917 12.625L10.3958 11.4583L8.54167 9.625L7.375 10.7917C7.125 11.0417 7 11.3438 7 11.6979C7 12.0521 7.125 12.3542 7.375 12.6042ZM12.625 7.39583C12.2639 7.03472 11.9015 6.90546 11.5377 7.00804C11.174 7.11064 10.9253 7.23296 10.7917 7.375L9.60417 8.54167L11.4583 10.3958L12.625 9.22917C12.875 8.97917 13 8.67361 13 8.3125C13 7.95139 12.875 7.64583 12.625 7.39583ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H8.0625C8.17361 2.56944 8.40625 2.21181 8.76042 1.92708C9.11458 1.64236 9.52778 1.5 10 1.5C10.4722 1.5 10.8854 1.64236 11.2396 1.92708C11.5938 2.21181 11.8264 2.56944 11.9375 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5ZM10 4C10.1444 4 10.2639 3.95278 10.3583 3.85833C10.4528 3.76389 10.5 3.64444 10.5 3.5C10.5 3.35556 10.4528 3.23611 10.3583 3.14167C10.2639 3.04722 10.1444 3 10 3C9.85556 3 9.73611 3.04722 9.64167 3.14167C9.54722 3.23611 9.5 3.35556 9.5 3.5C9.5 3.64444 9.54722 3.76389 9.64167 3.85833C9.73611 3.95278 9.85556 4 10 4Z" fill="#1C4980" />
                                </g>
                            </svg>
                        </Box>
                        <Typography sx={{ color: '#1C4980', fontSize: '14px' }} >Round Status</Typography>
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    )
}

export default SideNav