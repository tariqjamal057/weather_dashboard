import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import SavedLocation from "./pages/SavedLocation";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/saved" element={<SavedLocation />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
