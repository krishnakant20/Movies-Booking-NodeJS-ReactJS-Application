import React from 'react'
import './Header.css'
import ReactLogo from '../../assets/logo.svg'
import { Button } from '@mui/material';
import { Modal } from '@mui/material';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Header() {
    //modal component
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //tab component
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='headerCss'>
            <div>
                <img src={ReactLogo} alt="React Logo" />
            </div>
            <div>
                <Button variant="contained" onClick={handleOpen} >Login</Button>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                            Login111
                        </Typography> */}
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Login" {...a11yProps(0)} />
                                    <Tab label="Register" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                {/* Item One */}
                                <TextField id="standard-basic" label="Username" variant="standard" />
                                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" />
                                <div id='miniLogin'>
                                    <Button variant="contained" >Login</Button>

                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {/* Item Two */}
                                <TextField id="standard-basic" label="First Name*" variant="standard" />
                                <TextField id="standard-basic" label="Last Name*" variant="standard" />
                                <TextField id="standard-basic" label="E-mail ID*" variant="standard" />
                                <TextField id="standard-password-input" label="Password*" type="password" autoComplete="current-password" variant="standard" />
                                <TextField id="standard-basic" label="Contact Number*" variant="standard" />

                                <div id='miniLogin2'>
                                    <Button variant="contained" >Register</Button>

                                </div>
                            </TabPanel>

                        </Box>
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                    </Box>
                </Modal>

            </div>
        </div>
    )
}


// export class Header extends Component {
//     render() {
//         return (
//             <div className='headerCss'>
//                 <div>
//                     <img src={ReactLogo} alt="React Logo" />
//                 </div>
//                 <div>
//                     <Button variant="contained">Login</Button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Header

//tab component
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}