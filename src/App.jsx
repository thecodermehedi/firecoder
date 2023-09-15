import Header from "./components/Header";
import Main from "./components/Main";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div className="bg-[#0E1316] min-h-screen ">
        <Header />
        <ToastContainer
          position="top-right"
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
        <Main toast={toast} />
      </div>
    </>
  );
}

export default App;
