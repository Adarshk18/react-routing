import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
// import { Dashboard } from "./components/Dashboard";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

// function App() {
//   // const navigate = useNavigate(); // this hooke can only be invoe side a component in browserrouter
//   return (
//     <div>
//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/landing" element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             navigate("/landing");
//           }}
//         >
//           Landing Page
//         </button>
//         <button
//           onClick={() => {
//             navigate("/dashboard");
//           }}
//         >
//           Dashboard
//         </button>
//       </div>
//     </div>
//   );
// }

//to make a top level bar always on every screen just wrap the browserstack with div

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} setCount={setCount}/>
//
//     </div>
//   );
// }

// function Count({ count. setCount }) {
//   return <div>{count}
// <Buttons count={count} setCount={setCount} />
// </div>;
// }

// function Buttons({ count, setCount }) {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increasing
//       </button>

//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decreasing
//       </button>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      <CountRenderer count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function CountRenderer({ count }) {
  return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increasing
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decreasing
      </button>
    </div>
  );
}

export default App;

//lazy loading
