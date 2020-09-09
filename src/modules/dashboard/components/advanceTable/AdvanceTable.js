import React from 'react';
import AdvanceTable from '@stack-ui/components/dist/cjs/components/AdvanceTable/AdvanceTable';
import { TransColumns, TransData} from '../../../../lib/contsant';
import { Box, Card } from '@stack-ui/components'


const advanceTable = () => {
return (
    <Box width="66%">
          <Card cardTitle="Transaction History" style={{'height':"100%"}}>
            <Box p="20px">
            <AdvanceTable columns={TransColumns} data={TransData} fixedHeader striped />
                </Box>
                </Card>
                </Box>

)
}

export default advanceTable;