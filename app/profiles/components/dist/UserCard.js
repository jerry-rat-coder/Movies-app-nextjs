'use client';
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var images = [
    '/images/default-blue.png',
    '/images/default-red.png',
    '/images/default-slate.png',
    '/images/default-green.png'
];
var UserCard = function (_a) {
    var name = _a.name;
    var imgSrc = images[Math.floor(Math.random() * 4)];
    var router = navigation_1.useRouter();
    var selectProfile = react_1.useCallback(function () {
        router.push('/Index');
    }, [router]);
    return (React.createElement("div", { className: "flex items-center justify-center gap-8 mt-10" },
        React.createElement("div", { onClick: function () { return selectProfile(); } },
            React.createElement("div", { className: "group flex-row w-44 mx-auto" },
                React.createElement("div", { className: "w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden" },
                    React.createElement("img", { draggable: false, className: "w-max h-max object-contain", src: imgSrc, alt: "" })),
                React.createElement("div", { className: "mt-4 text-gray-400 text-2xl text-center group-hover:text-white" }, name)))));
};
exports["default"] = UserCard;
