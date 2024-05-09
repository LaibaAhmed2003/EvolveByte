// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./pages/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import Portfolio from "./pages/Portfolio/portfolio";

// const Router = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="http://localhost:5173/portfolio"
//             element={<Portfolio />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
