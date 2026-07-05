import { BrowserRouter, Route, Routes } from "react-router";
import Applaout from "../components/layouts/Applaout";
import HomePage from "../features/Home/pages/HomePage";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applaout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
