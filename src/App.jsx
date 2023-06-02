import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import Home from "./components/Home/Home";
import Vote from "./components/Vote";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div class="">
        <Home />
        <Vote />
      </div>
    </QueryClientProvider>
  );
}

export default App;
