import AccountSidebar from "../_components/AccountSidebar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <main className="lg:flex gap-5 w-full">
      <div className="w-3/12 ">
        <AccountSidebar />
      </div>
      <div className="w-9/12">
        <Toaster />
        {children}
      </div>
    </main>
  );
}