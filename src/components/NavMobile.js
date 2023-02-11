import React from "react";

// import navigation data
import { navigationData } from "../data";

const NavMobile = () => {
  return (
    <ul className="flex flex-col p-7">
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <a className="text-white" href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
