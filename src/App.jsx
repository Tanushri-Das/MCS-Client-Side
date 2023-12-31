import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
