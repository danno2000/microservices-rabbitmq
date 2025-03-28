import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ReactJson from 'react-json-view';
import Typography from '@mui/material/Typography';
import {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useState,
} from 'react';
import { post } from '../lib/post';

const DEFAULT_PAYLOAD = {
  id: 1,
  name: 'Dan Foley',
  email: 'dan@example.com',
  roles: ['admin', 'developer'],
  profile: {
    location: 'Berlin',
    interests: ['coding', 'music', 'travel', 'skiing'],
  },
};

const DEFAULT_STATE = {
  payload: JSON.stringify(DEFAULT_PAYLOAD, null, 3),
  services: {
    service1: false,
    service2: false,
  },
  response: {},
};

type ServiceNames = keyof typeof DEFAULT_STATE.services;

export function ServiceForm() {
  const [state, setState] = useState(DEFAULT_STATE);

  const handlePayloadChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value: payload } }) => {
      setState((state) => ({ ...state, payload }));
    },
    []
  );

  const handleSeviceSelection: ChangeEventHandler<HTMLInputElement> =
    useCallback(({ target: { name, checked } }) => {
      setState((state) => ({
        ...state,
        services: { ...state.services, [name as ServiceNames]: checked },
      }));
    }, []);

  const handleSendClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(async () => {
      try {
        const payload = {
          services: state.services,
          payload: JSON.parse(state.payload),
        };
        const response = await post('http://localhost:4000/api', payload);
        setState((state) => ({ ...state, response }));
      } catch (error: any) {
        setState((state) => ({ ...state, response: { error: error.message } }));
      }
    }, [state]);

  return (
    <>
      <Box component="section" sx={{ marginTop: 3 }}>
        <Typography variant="h6" gutterBottom>
          Request
        </Typography>

        <FormControl
          sx={{ width: '50%', paddingRight: 3 }}
          component="fieldset"
          variant="standard"
        >
          <FormLabel component="legend">Payload</FormLabel>
          <FormGroup>
            <TextField
              id="outlined-textarea"
              multiline
              rows={10}
              defaultValue={state.payload}
              onChange={handlePayloadChange}
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Microservices to Visit</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.services.service1}
                  onChange={handleSeviceSelection}
                  name="service1"
                />
              }
              label="Decorate payload with Service1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.services.service2}
                  onChange={handleSeviceSelection}
                  name="service2"
                />
              }
              label="Decorate payload with Service2"
            />
          </FormGroup>

          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSendClick}
          >
            Send
          </Button>
        </FormControl>
      </Box>
      <Box component="section" sx={{ marginTop: 3 }}>
        <Typography variant="h6" gutterBottom>
          Response
        </Typography>

        <ReactJson src={state.response} />
      </Box>
    </>
  );
}

export default ServiceForm;
