import Container from '@mui/material/container';
import FetchExample from './fetch-example';
import SocketIOExample from './socketio-example';
import TabbedCard from '../lib/components/tabbed-card';
import Typography from '@mui/material/Typography';
import RequestStateProvider from '../context/request-context';
import { SocketIOProvider } from '../context/socketio-context';

export function App() {
  return (
    <RequestStateProvider>
      <Container>
        <Typography variant="h1">Examples</Typography>

        <TabbedCard
          tabs={['Fetch Example', 'Websocket Example']}
          panels={[
            <FetchExample />,
            <SocketIOProvider uri="http://localhost:4000">
              <SocketIOExample />
            </SocketIOProvider>,
          ]}
        />
      </Container>
    </RequestStateProvider>
  );
}

export default App;
