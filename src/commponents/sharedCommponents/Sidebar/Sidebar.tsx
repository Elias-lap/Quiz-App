import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faClock,
  faHouse,
  faUsers,
  faSquarePollVertical,
  faHandshakeAngle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styleSideBar from "./Sidebar.module.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${styleSideBar.sidebar} ${
          isOpen ? "" : styleSideBar.open
        } border-r border-gray-300`}
      >
        <div className="p-4 pb-2 flex justify-end items-end ">
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg  bo"
            title="btn"
          >
            {isOpen ? (
              //  <FontAwesomeIcon icon={faBars} />
              <button
                className={`${styleSideBar.btnOpenClose} border p-2  rounded-full `}
                title="btn"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            ) : (
              <button
                className={`${styleSideBar.btnOpenClose} border p-2  rounded-full `}
                title="btn"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
          </button>
        </div>
        <ul>
            <Link to="">
            <li className={`${styleSideBar.paddingTopBottom}  border-t border-b`}>
            <span className={`${styleSideBar.bgIcon}   p-3 `}>
              <FontAwesomeIcon className="  size-6" icon={faHouse} />
            </span>

            {isOpen && <span className="  size-6 text-lg"> Dashboard</span>}
          </li>
            
            </Link>

            {/*  Groups*/}
            <Link to="">

          <li className={`${styleSideBar.paddingTopBottom}  border-t border-b`}>
            <span className={`${styleSideBar.bgIcon}   p-3 `}>
              <FontAwesomeIcon className="   size-6  " icon={faUsers} />
            </span>

            {isOpen && <span className="  size-6 text-lg"> Groups</span>}
          </li>
          </Link>
{/* Quizzes */}
<Link to="">
          <li className={`${styleSideBar.paddingTopBottom}  border-t border-b`}>
            <span className={`${styleSideBar.bgIcon}   p-3 `}>
              <FontAwesomeIcon className=" size-6" icon={faClock} />
            </span>
            <span></span>

            {isOpen && <span className="  size-6 text-lg"> Quizzes</span>}
          </li>

          </Link>


{/* Results */}
<Link to="">

          <li className={`${styleSideBar.paddingTopBottom}  border-t border-b`}>
          <span className={`${styleSideBar.bgIcon}   p-3 `}>

          <FontAwesomeIcon className=" size-6" icon={faSquarePollVertical} />
            </span>

            {isOpen && <span className="  size-6 text-lg"> Results</span>}
          </li>
          </Link>
{/* Help */}
          <Link to="">

          <li className={`${styleSideBar.paddingTopBottom}  border-t border-b`}>
          <span className={`${styleSideBar.bgIcon}   p-3 `}>

          <FontAwesomeIcon className=" size-6" icon={faHandshakeAngle} />
                                </span>
            {isOpen && <span className="  size-6 text-lg"> Help</span>}
          </li>
          </Link>

        </ul>
      </div>
    </>
  );
}
