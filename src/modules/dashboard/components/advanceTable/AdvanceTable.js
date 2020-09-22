import React from 'react';
import { TransColumns, TransData} from './contsant';
import { Box, Card,AdvanceTable } from '@stack-ui/components'


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