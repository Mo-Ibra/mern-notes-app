import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AddNote from "./pages/AddNote/AddNote";
import EditNote from "./pages/EditNote/EditNote";
import ViewNote from "./pages/ViewNote/ViewNote";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";

import Navbar from "./Components/Navbar/Navbar";

import { LoadingProvider, useLoading } from "./context/LoadingContext";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

function App() {
  return (
    <>
      <LoadingProvider>
        <Router>
          <MainApp />
        </Router>
      </LoadingProvider>
    </>
  );
}

const MainApp = () => {

  const { loading } = useLoading();

  return (
    <>
      {loading && <LoadingSpinner />}
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
          <Route path="/view-note/:id" element={<ViewNote />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;