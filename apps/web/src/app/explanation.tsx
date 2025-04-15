import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

export function Explanation() {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Typography variant="h1">
          Microservices Event Driven Architecture using RabbitMQ
        </Typography>
      </Box>
      <Box sx={{ p: 3, display: 'flex', marginBottom: 2 }}>
        <Box sx={{ width: '50%' }}>
          <Typography variant="h3">Purpose</Typography>
          <Typography variant="body1">
            This repository provides a small-to-medium starter package for
            companies looking to adopt a microservices architecture. It aims to
            help organizations begin effectively, offering a solid foundation
            for their initial set of services.
          </Typography>

          <img
            src="./microservices-event-driven-architecture.png"
            style={{ width: '100%', marginTop: 20 }}
          />
        </Box>

        <Box sx={{ width: '50%', flexGrow: 1, marginLeft: 3 }}>
          <Typography variant="h3">Ingredients</Typography>
          <Typography variant="body1">
            All of the elements that have gone into this are very intentional.
          </Typography>

          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText
                primary="RabbitMQ & GoLevelUp"
                secondary="Favour message distribution via routing keys over an exchange versus peer-to-peer REST interfaces that slowly grow more complex to manage as your infrusture grows."
              />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText
                primary="Nrwl NX"
                secondary="Monorepo tooling for simplified addition of microservices and shared and/or dependant target execution"
              />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText
                primary="NestJS"
                secondary="Structured, modular service framework with first-class support for countless additional open source technologies"
              />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText
                primary="SocketIO"
                secondary="Managed connections and abstracted away RPC calls"
              />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText
                primary="ReactJS & Material UI"
                secondary="Giant dev community with countless open source options for additional functionalities"
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Explanation;
