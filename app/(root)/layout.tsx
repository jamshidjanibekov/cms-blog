import {ChildProps} from "@/types";
import Navbar from "@/app/(root)/_compontents/navbar";
import Footer from "@/app/(root)/_compontents/footer";
const Layout = ({children}:ChildProps) => {
  return (
    <main>
      <Navbar/>
      <div className='container'>
        {children}
      </div>
      <Footer/>
    </main>
  );
};

export default Layout;