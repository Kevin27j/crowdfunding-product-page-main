import Stack from '@mui/material/Stack';
import Header from "./components/Header/Header"
import TopCard from "./components/Body/TopCard"
import StatsCard from "./components/Body/StatsCard"
import AboutProjCard from "./components/Body/AboutProjCard"
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
