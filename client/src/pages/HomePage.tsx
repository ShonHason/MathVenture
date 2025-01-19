import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../features/SideBar";
import React, { useContext, useEffect } from "react";
import LessonsContext from "../context/LessonsContext";
import "./HomePage.css";
import HomePageContent from "../ui/HomePageContent";
// import NavigationContext from "../context/NavigationContext";

interface SideBarProps {
  onLessons: () => void;
}
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const lessonsContext = useContext(LessonsContext);
  const navigate = useNavigate();
  if (!lessonsContext) {
    throw new Error("SideBar must be used within a LessonsContext.Provider");
  }

  const { onLessons, isMenuLessonsActive, setIsMenuLessonsActive } =
    lessonsContext;

  useEffect(() => {
    isMenuLessonsActive ? navigate("/home/lessons") : navigate("/home");
  }, [isMenuLessonsActive, setIsMenuLessonsActive]);

  return (
    <>
      <div className="homepage-container">
        <SideBar onLessons={onLessons} />
        <div className="outlet-container">
          {window.location.pathname === "/home" ? (
            <HomePageContent />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
