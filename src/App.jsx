import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//pages
import Dashboard from "./pages/DashBoard";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";
import Customers from "./pages/Customers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import styled from "styled-components";
//
// const H1 = styled.h1`
//   font-size: 20px;
//   font-weight: 600;
// `;

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="customers" element={<Customers />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
