import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 10 * 60 * 1000,
      staleTime: 10 * 60 * 1000,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
