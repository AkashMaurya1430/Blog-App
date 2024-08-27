import { Menu } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

// Menu Items
const menuItems = [
  { name: "Home", route: "/home" },
  { name: "Blog", route: "/blog" },
  { name: "Projects", route: "/projects" },
  { name: "About", route: "/about" },
];

const LoginComponent = ({ isLoggedIn }) => {
  // Add logic to get user image or else use initials
  const user = useSelector((state) => state.auth.user);

  if (isLoggedIn) {
    return <li className="flex py-2 px-4 items-center content-center font-semibold text-primary-100 rounded-lg">{user?.name}</li>;
  } else {
    return <li className="flex py-2 px-6 items-center content-center font-semibold text-primary-50 bg-blue-200 rounded-lg text-sm">Login</li>;
  }
};

const TopBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const app_name = useSelector((state) => state.appname.name);
  const active_page = useSelector((state) => state.appname.active_page);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="my-7 mx-10">
      <div className="flex justify-between items-center">
        <div className="text-lg text-primary-50 font-semibold ">{app_name}</div>

        <Menu onClick={handleNavOpen} className="cursor-pointer sm:hidden" />

        <nav
          className={`text-md font-normal fixed top-0 bottom-0 ${
            isNavOpen ? "right-0" : "-right-60"
          } px-10 sm:px-0 py-5 sm:py-0 sm:static bg-primary-25 sm:bg-transparent transition duration-300`}
        >
          {/* hidden sm:block */}
          <ul className="flex flex-col sm:flex-row text-sm space-y-7 sm:space-y-0 space-x-0 sm:space-x-5 items-end">
            <Menu onClick={handleNavOpen} className="cursor-pointer  sm:hidden ml-auto mt-3" />

            {menuItems.map((item, i) => {
              return item.name == active_page ? (
                <li className="flex text-md font-medium underline underline-offset-2 p-2 rounded-lg" key={i}>
                  {item.name}
                </li>
              ) : (
                <li className="flex text-md font-normal p-2" key={i}>
                  {item.name}
                </li>
              );
            })}
            <LoginComponent isLoggedIn={isLoggedIn} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
