import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import SidebarLinkGroup from "./SidebarLinkGroup";

const Clinical = ({ sidebarExpanded, setSidebarExpanded }: any) => {
  const pathname = usePathname();

  return (
    <SidebarLinkGroup
      activeCondition={
        pathname === "/allergy" ||
        pathname === "/condition" ||
        pathname === "/procedure" ||
        pathname === "/care-plan" ||
        pathname === "/family-history"
      }
    >
      {(handleClick, open) => {
        return (
          <React.Fragment>
            <Link
              href="#"
              className={`$ } group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark
            dark:hover:bg-meta-4`}
              onClick={(e) => {
                e.preventDefault();
                sidebarExpanded ? handleClick() : setSidebarExpanded(true);
              }}
            >
              Clinical
              <svg
                className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                  open && "rotate-180"
                }`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                  fill=""
                />
              </svg>
            </Link>

            <div
              className={`translate transform overflow-hidden ${
                !open && "hidden"
              }`}
            >
              <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                <li>
                  <Link
                    href="/allergy"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      (pathname === "/allergy" ||
                        pathname.includes("allergy")) &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    Allergy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/condition"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("condition") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    Condition
                  </Link>
                </li>

                <li>
                  <Link
                    href="/procedure"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("procedure") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    Procedure
                  </Link>
                </li>

                <li>
                  <Link
                    href="/care-plan"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("care-plan") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    Care Plan
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className={`group relative flex cursor-not-allowed items-center gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("family-history") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    Family History
                  </Link>
                </li>
              </ul>
            </div>
          </React.Fragment>
        );
      }}
    </SidebarLinkGroup>
  );
};

export default Clinical;
