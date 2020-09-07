import React from "react";
import { Box, Card, Typography, Icon, Image } from "@stack-ui/components";
import { EARNING_CHART } from "../../../../utils/constant";

const EarningReports = () => {
  const earningData = "1 Mar - 31 Mar Showing Data";
  const curentMonthText = "This Month";
  const lastMonthText = "Last Month";
  const weeklyEarningReportText = "Weekly Earning Report";

  const earningReportCalculation = {current: '$120,254', last: '$98,741' }
  return (
    <Box mr="20px" p="10px" width="33.33%" className="earning-header">
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
          <Box width="26%" mr="35px">
            <Typography as="span">{curentMonthText}</Typography>
            <Typography as="h3">{earningReportCalculation.current}</Typography>
          </Box>
          <Box width="26%">
            <Typography as="span">{lastMonthText}</Typography>
            <Typography as="h3">{earningReportCalculation.last}</Typography>
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
