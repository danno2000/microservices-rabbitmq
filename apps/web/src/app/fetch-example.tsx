import Box from '@mui/material/Box';
import ReactJson from 'react-json-view';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { post } from '../lib/fetch/post';
import { useRequestState } from '../context/request-context';
import RequestDetails from './request-form';

export function FetchExample() {
  const { requestState, setResponse } = useRequestState();

  const handleSend = useCallback(async () => {
    try {
      const payload = {
        services: requestState.services,
        payload: JSON.parse(requestState.payload),
      };
      const response = await post('http://localhost:4000/api', payload);
      setResponse(response);
    } catch (error: unknown) {
      setResponse({ error: error instanceof Error ? error.message : error });
    }
  }, [requestState]);

  return (
    <Box
      sx={{
        display: 'flex',
        '& > div': { flexBasis: 1, flexGrow: 1, marginTop: 3 },
      }}
    >
      <Box>
        <Typography variant="h6">Request</Typography>
        <RequestDetails onSend={handleSend} />
      </Box>
      <Box sx={{ marginLeft: 3 }}>
        <Typography variant="h6">Response via Fetch</Typography>
        <ReactJson src={requestState.response} />
      </Box>
    </Box>
  );
}

export default FetchExample;
