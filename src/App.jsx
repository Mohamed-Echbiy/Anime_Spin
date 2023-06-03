import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import Home from "./components/Home/Home";
import Vote from "./components/Vote";
import Auth from "./context/Auth";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth>
        <div class="">
          <Home />
          <Vote />
        </div>
      </Auth>
    </QueryClientProvider>
  );
}

export default App;
