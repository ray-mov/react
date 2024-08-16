import { Outlet, useNavigate } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";
import Header from "../ui/Header";

const AppLayout = () => {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading ? <h1>loding..</h1> : null}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
