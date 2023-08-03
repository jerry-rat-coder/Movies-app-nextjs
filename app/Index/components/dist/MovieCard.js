'use client';
"use strict";
exports.__esModule = true;
var bs_1 = require("react-icons/bs");
var bi_1 = require("react-icons/bi");
var FavoriteButton_1 = require("./FavoriteButton");
var navigation_1 = require("next/navigation");
var useInfoModal_1 = require("@/app/hooks/useInfoModal");
var MovieCard = function (_a) {
    var data = _a.data;
    var router = navigation_1.useRouter();
    var openModal = useInfoModal_1["default"]().openModal;
    return (React.createElement("div", { className: "group bg-zinc-900 col-span  relative h-[12vw]" },
        React.createElement("img", { onClick: function () { router.push("/watch/" + (data === null || data === void 0 ? void 0 : data.id)); }, className: "\r\n            cursor-pointer\r\n            object-cover\r\n            transition\r\n            duration-0 \r\n            shadow-xl\r\n            rounded-md\r\n            group-hover:opacity-90\r\n            sm:group-hover:opacity-0\r\n            delay-300\r\n            w-full\r\n            h-[12vw]\r\n            ", src: data.thumbnailUrl, alt: "Thumbnail" }),
        React.createElement("div", { className: " \r\n            opacity-0\r\n            absolute\r\n            top-0 z-10 \r\n            transition \r\n            duration-200 \r\n            delay-300 \r\n            invisible \r\n            sm:visible \r\n            w-full \r\n            scale-0 \r\n            group-hover:scale-110 \r\n            group-hover:translate-x-[2vw] \r\n            group-hover:-translate-y-[6vw] \r\n            group-hover:opacity-100" },
            React.createElement("img", { className: "\r\n                duration \r\n                cursor-pointer \r\n                rounded-t-md \r\n                object-cover \r\n                transition \r\n                w-full \r\n                h-[12vw] \r\n                shadow-xl\r\n                ", src: data.thumbnailUrl, alt: "Thumbnail" }),
            React.createElement("div", { className: "z-10 \r\n                bg-zinc-800 \r\n                p-2 lg:p-4 \r\n                absolute \r\n                w-full \r\n                transition \r\n                shadow-md \r\n                rounded-b-md\r\n                " },
                React.createElement("div", { className: "flex flex-row gap-3 items-center" },
                    React.createElement("div", { className: "\r\n                        flex justify-center items-center \r\n                        bg-white hover:bg-neutral-300 \r\n                        rounded-full \r\n                        transition \r\n                        cursor-pointer \r\n                        w-6 h-6 \r\n                        lg:w-10 lg:h-10\r\n                        ", onClick: function () { router.push("/watch/" + (data === null || data === void 0 ? void 0 : data.id)); } },
                        React.createElement(bs_1.BsFillPlayFill, { size: 30 })),
                    React.createElement(FavoriteButton_1["default"], { movieId: data.id }),
                    React.createElement("div", { className: '\r\n                        cursor-pointer \r\n                        ml-auto \r\n                        group/item \r\n                        rounded-full \r\n                        border-2 border-white \r\n                        hover:border-neutral-300 \r\n                        w-6 h-6 \r\n                        lg:w-10 lg:h-10 \r\n                        flex \r\n                        justify-center \r\n                        items-center' },
                        React.createElement(bi_1.BiChevronDown, { onClick: function () { openModal(data === null || data === void 0 ? void 0 : data.id); }, size: 30, className: 'text-white group-hover/item:text-neutral-300 w-4 lg:w-6' }))),
                React.createElement("p", { className: 'text-green-400 font-semibold mt-4' },
                    "New ",
                    React.createElement("span", { className: 'text-white' }, "2023")),
                React.createElement("div", { className: 'flex flex-row mt-4 gap-2 items-center' },
                    React.createElement("p", { className: 'text-white text-[10px] lg:text-sm' }, data.duration)),
                React.createElement("div", { className: 'flex flex-row mt-4 gap-2 items-center' },
                    React.createElement("p", { className: 'text-white text-[10px] lg:text-sm' }, data.genre))))));
};
exports["default"] = MovieCard;
