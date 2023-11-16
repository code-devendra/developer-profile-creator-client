import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import DeveloperForm from "./components/DeveloperForm";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Toaster />
      <DeveloperForm />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
