import Box from '@mui/material/Box';
import ReactJson from 'react-json-view';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { post } from '../lib/fetch/post';
import { useRequestState } from '../context/request-context';
import RequestDetails from './request-form';

export function FetchExample() {
  const { requestState, setResponse } = useRequestState();

  const handleSendClick = useCallback(async () => {
    try {
      const payload = {
        services: requestState.services,
        payload: JSON.parse(requestState.payload),
      };
      const response = await post('http://localhost:4000/api', payload);
      setResponse(response);
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : err;
      setResponse({ error });
    }
  }, [requestState]);

  return (
    <>
      <Box component="section" sx={{ marginTop: 3 }}>
        <Typography variant="h6">Request</Typography>
        <RequestDetails onSend={handleSendClick} />
      </Box>
      <Box component="section" sx={{ marginTop: 3 }}>
        <Typography variant="h6">Response via Fetch</Typography>
        <ReactJson src={requestState.response} />
      </Box>
    </>
  );
}

export default FetchExample;
