import { Outlet } from "react-router-dom";
import { DashboardLayout } from "./modules/shared";

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
