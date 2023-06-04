import { Show } from "solid-js";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Vote from "./components/Vote";
import Data from "./context/Data";
import Auth from "./context/Auth";

function App() {
  return (
    <Auth>
      <Data>
        <div class="">
          <Home />
          <Vote />

          <Favorites />
        </div>
        <Footer />
      </Data>
    </Auth>
  );
}

export default App;
