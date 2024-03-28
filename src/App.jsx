import Stack from '@mui/material/Stack';
import Header from "./components/Header"
import TopCard from "./components/TopCard"
import StatsCard from "./components/StatsCard"
import AboutProjCard from "./components/AboutProjCard"
import "./index.css"

function App() {
  return (
    <>
      <Header />
      <Stack>
        <TopCard />
        <StatsCard />
        <AboutProjCard />
      </Stack>

    </>
  );
}

export default App
