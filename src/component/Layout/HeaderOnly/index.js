// import Header from "~/component/Layout/components/Header";
import Header from "../components/Header";

function HeaderOnly({ children }) {
  return (
    <div className="">
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
