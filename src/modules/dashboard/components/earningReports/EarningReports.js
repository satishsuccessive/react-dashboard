import React from "react";
import { Box, Card, Typography, Icon, Image } from "@stack-ui/components";
import { EARNING_CHART } from "../../../../utils/constant";
import { Badge } from "@stack-ui/components/dist/cjs/components/Badge";

const EarningReports = () => {
  const earningData = "1 Mar - 31 Mar Showing Data";
  const curentMonthText = "This Month";
  const lastMonthText = "Last Month";
  const weeklyEarningReportText = "Weekly Earning Report";

  const earningReportCalculation = {current: '$120,254', last: '$98,741' }
  const styl = {
    border: '1px solid red',
    padding: '.25em .4em',
    fontSize: '13px',
  }
  return (
    <Box mr="20px"  width="33%" className="earning-header">
      <Card cardTitle="Earning Reports">
        <Box mb="15px">
          <Typography as="span">{earningData}</Typography>
        </Box>
        <Box mb="35px">
          <Typography as="h2">
            <i>$</i>25,632.78
          </Typography>
        </Box>
        <Box display="flex" flexWrap="nowrap" mb="45px">
          <Box width="38%" mr="35px">
            <Typography as="span">{curentMonthText}</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="baseline">
            <Typography as="h3">{earningReportCalculation.current}</Typography>
            <Badge variant="secondary" bgColor="rgba(35,179,151,.2)" color="#23b397" style={{...styl}}>+15</Badge>
            </Box>
          </Box>
          <Box width="32%"> 
            <Typography as="span">{lastMonthText}</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="baseline">
            <Typography as="h3">{earningReportCalculation.last}</Typography>
            <Badge bgColor="rgba(240,100,59,.2)" color="#f0643b" style={{...styl}}>-5</Badge>
            </Box>
          </Box>
        </Box>
        <Box mb="65px">
        <h5>
        <i><Icon size={12} icon={'doughnut-chart'} /></i>
        {weeklyEarningReportText}
       </h5>
        </Box>
        <Image src={EARNING_CHART} height="80px" width="100%" />
      </Card>
    </Box>
  );
};
export default EarningReports;
