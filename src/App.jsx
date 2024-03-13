import Footer from "./components/Footer";
import Header from "./components/Header";
import EditJobs from "./pages/EditJobs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostJob from "./pages/PostJob";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewJob from "./pages/ViewJob";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="max-w-5xl mx-auto px-8 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/jobs/:id" element={<ViewJob />} />
          <Route path="/edit-job/:id" element={<EditJobs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
