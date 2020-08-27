import React from 'react';
import Badges from '../../../../components/general/components/Badges';
import { Box } from '@stack-ui/components';
import PillBadges from '../../../../components/general/components/PillBadges';
import BreadCrumbs from '../../../../components/general/components/BreadCrumbs';

const GeneralUi = (props) => {

return (
    <Box className="general-ui-elements" display="flex" justifyContent="space-between" flexWrap="wrap">
      <Box width="49%" mb="25px"><Badges /></Box>
      <Box width="49%" mb="25px"><PillBadges /></Box>
      <Box width="49%" mb="25px"><BreadCrumbs /></Box>
    </Box>
)
}
export default GeneralUi;