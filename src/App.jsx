import {useEffect, useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="bg-[#0E1316] min-h-screen ">
        <Header />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
        {loading ? <Loading /> : <Main toast={toast} />}
        <Footer />
      </div>
    </>
  );
}

export default App;
