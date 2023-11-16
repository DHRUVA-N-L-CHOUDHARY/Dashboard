import React from "react";

const navigationLinks = [
  { name: "Overview", href: "#", current: false },
  { name: "Onboarding", href: "#", current: false },
  { name: "Monitoring", href: "#", current: true },
  { name: "Flagging", href: "#", current: false },
  { name: "Source of Income", href: "#", current: false },
  { name: "UAR", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  return (
    <div className="h-full w-1/5 min-h-screen shadow-md bg-white flex flex-col">
      <div className="px-4 sm:px-6 lg:px-8  ">
        <div className="flex flex-col items-center justify-center mt-16">
          <div className="flex items-center ">
            <span className="text-lg font-bold text-gray-800">LOGO HERE</span>
          </div>
        </div>

        <nav className="mt-24 items-center ">
          <div>
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-violet-100 text-violet-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-violet-900",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
