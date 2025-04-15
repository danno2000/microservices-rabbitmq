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

  const handleSend = useCallback(async () => {
    try {
      const payload = {
        services: requestState.services,
        payload: JSON.parse(requestState.payload),
      };

      const response = await new Promise((resolve) =>
        socket.emit('addServiceStamps', payload, resolve)
      );

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
        <Typography variant="h6">Response via SocketIO</Typography>
        <ReactJson src={requestState.response} />
      </Box>
    </Box>
  );
};

export default SocketIOExample;
