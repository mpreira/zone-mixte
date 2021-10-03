import React from "react";

const Tabs = ({ tabs, changeKey, activeKey, classNames }) => {
    return (
        <nav className={`flex justify-center h-10 gap-x-2 ${classNames}`}>
            {tabs.map((tab) => (
                <div
                    onClick={() => changeKey(tab.key)}
                    key={tab.key}
                    className={`${
                        activeKey === tab.key
                            ? "bg-white border-b border-gold text-gold hover:text-crimson"
                            : "bg-none hover:bg-white text-gray-400 hover:text-gold"
                    } sm:w-1/2 md:w-auto tab-item text-sm justify-center flex items-center h-full px-4 py-4 transform overflow-hidden cursor-pointer transform hover:shadow-md duration-500`}
                >
                    <i
                        className={`xs:text-sm mr-2 md:text-xl fal fa-${tab.icon} hover:hidden`}
                    ></i>{" "}
                    <span className="">{tab.name}</span>
                </div>
            ))}
        </nav>
    );
};

export default Tabs;
