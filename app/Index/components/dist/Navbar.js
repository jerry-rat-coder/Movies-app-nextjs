'use client';
"use strict";
exports.__esModule = true;
var NavbarItem_1 = require("./NavbarItem");
var bs_1 = require("react-icons/bs");
var react_1 = require("react");
var MobileMenu_1 = require("./MobileMenu");
var AccountMenu_1 = require("./AccountMenu");
var TOP_OFFSET = 66;
var NavBar = function (_a) {
    var currentUser = _a.data;
    var _b = react_1.useState(false), showMobileMenu = _b[0], setShowMobileMenu = _b[1];
    var _c = react_1.useState(false), showAccountMenu = _c[0], setShowAccountMenu = _c[1];
    var _d = react_1.useState(true), showBackground = _d[0], setShowBackground = _d[1];
    var toggleMobileMenu = react_1.useCallback(function () {
        setShowMobileMenu(function (currentMobileMenu) {
            return !currentMobileMenu;
        });
    }, []);
    var toggleAccountMenu = react_1.useCallback(function () {
        setShowAccountMenu(function (currentAccountMenu) {
            return !currentAccountMenu;
        });
    }, []);
    react_1.useEffect(function () {
        var handleScroll = function () {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(false);
            }
            else {
                setShowBackground(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (React.createElement("nav", { className: "w-full fixed z-40" },
        React.createElement("div", { className: "\n            px-4\n            md:px-16\n            py-6\n            flex\n            items-center\n            transition\n            duration-500\n            " + (showBackground ? 'bg-zinc-900 bg-opacity-90' : '') + "\n            " },
            React.createElement("img", { className: "h-4 lg:h-7", src: "images/logo.png", alt: "logo" }),
            React.createElement("div", { className: "\r\n                flex-row\r\n                hidden\r\n                ml-8\r\n                gap-4\r\n                lg:flex\r\n                " },
                React.createElement(NavbarItem_1["default"], { label: "Home" }),
                React.createElement(NavbarItem_1["default"], { label: "Series" }),
                React.createElement(NavbarItem_1["default"], { label: "Films" }),
                React.createElement(NavbarItem_1["default"], { label: "New & Popular" }),
                React.createElement(NavbarItem_1["default"], { label: "My list" }),
                React.createElement(NavbarItem_1["default"], { label: "Browse By Languge" })),
            React.createElement("div", { onClick: toggleMobileMenu, className: "lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative" },
                React.createElement("p", { className: "text-white text-sm" }, "Browse"),
                React.createElement(bs_1.BsChevronDown, { className: "text-white transition " + (!showMobileMenu ? 'rotate-0' : 'rotate-180') + " " }),
                React.createElement(MobileMenu_1["default"], { visible: showMobileMenu })),
            React.createElement("div", { className: "flex flex-row items-center ml-auto gap-7" },
                React.createElement("div", { className: "text-gray-200 hover:text-gray-300 cursor-pointer transition" },
                    React.createElement(bs_1.BsSearch, null)),
                React.createElement("div", { className: "text-gray-200 hover:text-gray-300 cursor-pointer transition" },
                    React.createElement(bs_1.BsBell, null)),
                React.createElement("div", { onClick: toggleAccountMenu, className: "flex flex-row items-center gap-2 cursor-pointer relative" },
                    React.createElement("div", { className: "w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden" },
                        React.createElement("img", { src: "/images/default-blue.png", alt: "" })),
                    React.createElement(bs_1.BsChevronDown, { className: "w-4 text-white fill-white transition " + (!showAccountMenu ? 'rotate-0' : 'rotate-180') }),
                    React.createElement(AccountMenu_1["default"], { visible: showAccountMenu, name: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name })))))
    // <div className='text-sky-500'>
    //     I'm Navbar
    // </div>
    );
};
exports["default"] = NavBar;
