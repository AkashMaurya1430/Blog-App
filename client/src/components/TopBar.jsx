import React from "react";
import { useSelector } from "react-redux";

// Menu Items
const menuItems = [
  { name: "Home", route: "/home" },
  { name: "Blog", route: "/blog" },
  { name: "Projects", route: "/projects" },
  { name: "About", route: "/about" },
];

const TopBar = () => {
  const LoginComponent = () => {
    return isLoggedIn ? (
      <li className="">Hello Saransh</li>
    ) : (
      <li className="flex py-2 px-4 items-center content-center font-semibold text-primary-50 bg-primary-25 rounded-lg">
        Login
      </li>
    );
  };
  const app_name = useSelector((state) => state.appname.name);
  const active_page = useSelector((state) => state.appname.active_page);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="flex justify-between py-2 md:py-5 lg:py-5 px-2  w-full">
      <div className="text-lg text-primary-50 font-semibold flex px-5 justify-center items-center">
        {app_name}
      </div>
      <nav className="text-md font-normal">
        <ul className="flex flex-row space-x-7">
          {menuItems.map((item, i) => {
            return item.name == active_page ? (
              <li
                className="flex text-md font-medium underline underline-offset-2 py-2 px-4 rounded-lg"
                key={i}
              >
                {item.name}
              </li>
            ) : (
              <li className="flex text-md font-normal p-2" key={i}>
                {item.name}
              </li>
            );
          })}
          <LoginComponent />
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
