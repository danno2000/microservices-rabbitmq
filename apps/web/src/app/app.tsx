import { useMemo } from 'react';
import Container from '@mui/material/container';
import FetchExample from './fetch-example';
import SocketIOExample from './socketio-example';
import TabbedPaper from '../lib/components/tabbed-paper';
import { ThemeProvider } from '@mui/material/styles';
import RequestStateProvider from '../context/request-context';
import { SocketIOProvider } from '../context/socketio-context';
import defaultTheme from '../themes/default-theme';
import Explanation from './explanation';

export function App() {
  const tabs = useMemo(() => ['Fetch Example', 'Websocket Example'], []);

  // Microservices Event Driven Architecture RabbitMQ:
  // Both examples interface the api gateway where
  // the subsequent requests are made to the
  // microservices via RabbitMQ.

  // Simplicity Using Decorators from GoLevelUp:
  // When looking at the microservices implementation,
  // pay particular attention to the simplicity of
  // the intra-service communication as there is nearly
  // zero boilerplate code.

  const panels = useMemo(
    () => [
      // A simple example using fetch to interface
      // the the api gateway.
      <FetchExample />,

      // A simple example using SocketIO to interface
      // the gateway inwhich the socket is instantiated,
      // connected and ultimately closed and disposed.
      <SocketIOProvider uri="http://localhost:4000">
        <SocketIOExample />
      </SocketIOProvider>,
    ],
    []
  );

  return (
    <RequestStateProvider>
      {/* 
        Very simple theme provider easily extended 
        to offer light and dark themes.
      */}
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Explanation />
          <TabbedPaper tabs={tabs} panels={panels} />
        </Container>
      </ThemeProvider>
    </RequestStateProvider>
  );
}

export default App;
