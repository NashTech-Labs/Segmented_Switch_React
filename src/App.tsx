import { Box } from '@mui/material';
import './App.css';
import SegmentedSwitch from './Components/SegmentedSwitch/SegmentedSwitch';

const switchNames = ['switch1', 'switch2', 'switch3'] // pass array of switch names to the components

function App() {
  return (
    <Box className="App">
      <h2>Reusable Segmented Switch</h2>
      <SegmentedSwitch switchNames={switchNames} />
    </Box>
  );
}

export default App;
