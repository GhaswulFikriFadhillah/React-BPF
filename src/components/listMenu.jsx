import { AiOutlineOrderedList, AiOutlineUser } from "react-icons/ai";
import { MdDashboard, MdError } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
  return (
    <>
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <AiOutlineOrderedList className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <AiOutlineUser className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/users" className={menuClass}>
              <FaUserFriends className="mr-4 text-xl" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="*1" className={menuClass}>
              <MdError className="mr-4 text-xl" />
              Error404
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="*2" className={menuClass}>
              <MdError className="mr-4 text-xl" />
              Error400
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="*3" className={menuClass}>
              <MdError className="mr-4 text-xl" />
              Error403
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="*4" className={menuClass}>
              <MdError className="mr-4 text-xl" />
              Error401
            </NavLink>
          </li>

        </ul>
      </div>
    </>
  );
}
