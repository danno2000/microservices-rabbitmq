import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { ChangeEventHandler, FC, useCallback } from 'react';
import { ServiceNames, useRequestState } from '../context/request-context';

type RequestDetailsProps = { onSend: () => void };

export const RequestDetails: FC<RequestDetailsProps> = ({ onSend }) => {
  const { requestState, setPayload, setServiceSelection } = useRequestState();

  const handlePayloadChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => setPayload(value),
    []
  );

  const handleSeviceSelection: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      ({ target: { name, checked } }) =>
        setServiceSelection(name as ServiceNames, checked),
      []
    );

  return (
    <>
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
            defaultValue={requestState.payload}
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
                checked={requestState.services.service1}
                onChange={handleSeviceSelection}
                name="service1"
              />
            }
            label="Decorate payload with Service1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={requestState.services.service2}
                onChange={handleSeviceSelection}
                name="service2"
              />
            }
            label="Decorate payload with Service2"
          />
        </FormGroup>

        <Button variant="contained" endIcon={<SendIcon />} onClick={onSend}>
          Send
        </Button>
      </FormControl>
    </>
  );
};

export default RequestDetails;
