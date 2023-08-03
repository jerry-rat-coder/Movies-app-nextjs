'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import getCurrentUser from "@/app/actions/getCurrentUser";
var react_2 = require("next-auth/react");
var AccountMenu = function (_a) {
    var visible = _a.visible, name = _a.name;
    // const currentUser  = await getCurrentUser();
    if (!visible) {
        return null;
    }
    return (react_1["default"].createElement("div", { className: "bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800" },
        react_1["default"].createElement("div", { className: "flex flex-col gap-3" },
            react_1["default"].createElement("div", { className: "px-3 group/item flex flex-row gap-3 items-center w-full" },
                react_1["default"].createElement("img", { className: " w-8 rounded-md", src: "/images/default-blue.png", alt: "" }),
                react_1["default"].createElement("p", { className: "text-sm text-white group-hover/item:underline" }, name))),
        react_1["default"].createElement("hr", { className: "border-0 h-px my-4 bg-gray-600" }),
        react_1["default"].createElement("div", { onClick: function () { react_2.signOut(); }, className: "px-3 text-center text-white text-sm hover:underline" }, "Sign out Netflix")));
};
exports["default"] = AccountMenu;
