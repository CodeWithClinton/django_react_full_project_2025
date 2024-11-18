import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogContainer from "./ui_components/BlogContainer";
import Footer from "./ui_components/Footer";
import Header from "./ui_components/Header";
import NavBar from "./ui_components/NavBar";
import AppLayout from "./ui_components/AppLayout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupPage from "./pages/SignupPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="blogs/:slug" element={<DetailPage />} />
            <Route path="signup" element={<SignupPage />} />
            {/* <Route path="profile" element={<ProfilePage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
