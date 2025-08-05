import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//import Routes from "./routes.js";
import Login from "./src/Screens/Login/Login";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Login/>
      </NavigationContainer>
    </QueryClientProvider>
  );
}