import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MyAssessment from './MyAssessment';
// work for the tabs in mobile view
function CustomTabPanel(props) {
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
        <Box sx={{ p: 1 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
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
export default function MobileDashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{width:'100%', borderBottom: 1, borderColor: 'divider',position:'fixed' ,backgroundColor:'white',top:'70px',zIndex:'1000' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{width:'100%',display:'flex',flexDirection:'row',justifyItems:'space-bitween'}}>
          <Tab sx={{fontSize:'14px' ,textTransform:'none'}} label="My Assessment" {...a11yProps(0)} />
          <Tab sx={{fontSize:'14px',textTransform:'none'}} label="Unstop Assessment" {...a11yProps(1)} className='md:hidden'/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} sx={{position:'relative',marginTop:'150px'}}>
        <MyAssessment/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      </CustomTabPanel>
      
    </Box>
  );
}
