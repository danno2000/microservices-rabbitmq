import Box from '@mui/material/Box';
import ReactJson from 'react-json-view';
import Typography from '@mui/material/Typography';
import RequestDetails from './request-form';
import { useCallback } from 'react';
import { useRequestState } from '../context/request-context';
import { useSocketIO } from '../context/socketio-context';

export const SocketIOExample = () => {
  const { requestState, setResponse } = useRequestState();
  const socket = useSocketIO();

  const handleSendClick = useCallback(async () => {
    try {
      const payload = {
        services: requestState.services,
        payload: JSON.parse(requestState.payload),
      };

      const response = await new Promise((resolve) =>
        socket.emit('addServiceStamps', payload, resolve)
      );

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
        <Typography variant="h6">Response via SocketIO</Typography>
        <ReactJson src={requestState.response} />
      </Box>
    </>
  );
};

export default SocketIOExample;
