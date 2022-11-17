import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RouteSwitch({ Header, pages }) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {pages.map((page) => (
          <Route path={page.path} element={page.element} key={page.id} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
