import { Outlet, useNavigate } from "react-router-dom";

import Header from "../ui/Header";

const AppLayout = () => {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading ? <h1>loding..</h1> : null}
      <Header />
      <main className="flex flex-col items-center gap-12">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
