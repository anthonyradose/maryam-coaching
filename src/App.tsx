import { campaigns } from "./config/campaigns";
import LandingPage from "./pages/LandingPage";

function App() {
  return <LandingPage config={campaigns.campaign3} />;
}

export default App;