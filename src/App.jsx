import React, { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";
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

// function App() {
//   const [count, setCount] = useState(0);

//   //warp anyone that wants to use the teleported value inside the provider
//   return (
//     <div>
//       <CountContext.Provider value={count}>
//       <Count setCount={setCount} />
//       </CountContext.Provider>
//     </div>
//   );
// }

// function Count({ setCount }) {
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons setCount={setCount} />
//     </div>
//   );
// }

// function CountRenderer() {
//   const count = useContext(CountContext);
//   return <div>{count}</div>;
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

//STATE MANAGEMENT- RECOIL

function App() {
  //warp anyone that wants to use the teleported value inside the provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>

      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer (){
  const count = useRecoilValue(countAtom);
  return <div>
    {count%2 ==0 ? "It is even" : null}
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);

  //if i only wants setCount
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increasing
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decreasing
      </button>
    </div>
  );
}

export default App;

//lazy loading
