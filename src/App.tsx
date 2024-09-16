import { Outlet } from "react-router-dom";
import { DashboardLayout } from "./modules/shared";

import "./App.scss";
function App() {
  return (
    <>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </>
  );
}

export default App;
