import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Diary from "./pages/Diary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Diary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
