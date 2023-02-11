// import navigation data
import { navigationData } from "../data";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-8 text-black">
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="dark:text-white"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                to={item.to}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
