import Header from "../components/Header";
import Sidebar from "./Sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
