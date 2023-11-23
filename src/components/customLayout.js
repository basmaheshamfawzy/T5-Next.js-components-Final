import "../app/globals.css";
import Header from "./header";
import Footer from "./footer";
export default function CustomLayout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}