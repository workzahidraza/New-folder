import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import "./features/styles/global.scss";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
