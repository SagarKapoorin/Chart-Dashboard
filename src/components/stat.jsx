import React from 'react';
import { Box, Typography } from '@mui/material';
import { VerifiedUser } from '@mui/icons-material'; 
import StatBox from './Statbox.jsx'

const WebsiteTrafficStats = ({ totalVisits, averageVisitsPerDay, increasePercentage }) => {
  return (
    <Box marginRight={'2rem'}>
      <StatBox
        title="Total Visits"
        subtitle={`${totalVisits} visits`}
        icon={<VerifiedUser />}
        progress={averageVisitsPerDay}
        increase={`${0}%`}
      />
      <StatBox
        title="Average Visits per Day"
        subtitle={`${averageVisitsPerDay} visits/day`}
        icon={<VerifiedUser />}
        progress={averageVisitsPerDay} 
        increase={`${0}%`}
      />
      <StatBox
        title="Increase Percentage"
        subtitle={`${increasePercentage}% increase`}
        icon={<VerifiedUser />}
        increase={`${increasePercentage}%`}
      />
    </Box>
  );
};

export default WebsiteTrafficStats;
