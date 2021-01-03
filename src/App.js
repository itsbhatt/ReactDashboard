import { Box } from '@material-ui/core';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Box
        display="grid"
        gridTemplateColumns="auto 1fr"
        height="calc(100vh - 78px)"
        overflow="hidden"
      >
        <Sidebar />
        <Main />
      </Box>
    </>
  );
};

export default App;
