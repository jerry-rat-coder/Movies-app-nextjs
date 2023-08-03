'use client';
"use strict";
exports.__esModule = true;
var ai_1 = require("react-icons/ai");
var FavoriteButton_1 = require("./FavoriteButton");
var PlayButton_1 = require("./PlayButton");
var useInfoModal_1 = require("@/app/hooks/useInfoModal");
var useMovie_1 = require("@/app/hooks/useMovie");
var react_1 = require("react");
var InfoModal = function () {
    var _a = useInfoModal_1["default"](), movieId = _a.movieId, isOpen = _a.isOpen, closeModal = _a.closeModal;
    var _b = react_1.useState(!!isOpen), isVisible = _b[0], setIsVisible = _b[1];
    var data = useMovie_1["default"](movieId).data;
    react_1.useEffect(function () {
        setIsVisible(!!isOpen);
    }, [isOpen]);
    var handleClose = react_1.useCallback(function () {
        setIsVisible(false);
        setTimeout(function () {
            closeModal();
        }, 300);
    }, [closeModal]);
    if (!isOpen) {
        return null;
    }
    return (React.createElement("div", { className: '\r\n        z-50 \r\n        transition \r\n        duration-300 \r\n        bg-black \r\n        bg-opacity-80 \r\n        flex justify-center items-center \r\n        overflow-x-hidden \r\n        overflow-y-auto \r\n        fixed \r\n        inset-0\r\n        ' },
        React.createElement("div", { className: '\r\n            relative\r\n            w-auto\r\n            mx-auto\r\n            max-w-3xl\r\n            rounded-md\r\n            overflow-hidden\r\n            ' },
            React.createElement("div", { className: (isVisible ? 'scale-100' : 'scale-0') + "\n                    transform \n                    duration-300 \n                    relative \n                    flex-auto \n                    bg-zinc-900 \n                    drop-shadow-md\n                    " },
                React.createElement("div", { className: 'relative h-96' },
                    React.createElement("video", { className: 'w-full h-full brightness-[60%] object-cover', poster: data === null || data === void 0 ? void 0 : data.thumbnailUrl, src: data === null || data === void 0 ? void 0 : data.videoUrl, autoPlay: true, muted: true, loop: true }),
                    React.createElement("div", { onClick: handleClose, className: ' cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex justify-center items-center group' },
                        React.createElement(ai_1.AiOutlineClose, { size: 20, className: ' text-white group-hover:text-neutral-300 transition' })),
                    React.createElement("div", { className: ' absolute bottom-[10%] left-10 ' },
                        React.createElement("p", { className: 'text-white text-3xl md:text-4xl lg:text-5xl h-full font-bold mb-8' }, data === null || data === void 0 ? void 0 : data.title),
                        React.createElement("div", { className: 'flex flex-row gap-4 items-center' },
                            React.createElement(PlayButton_1["default"], { movieId: data === null || data === void 0 ? void 0 : data.id }),
                            React.createElement(FavoriteButton_1["default"], { movieId: data === null || data === void 0 ? void 0 : data.id })))),
                React.createElement("div", { className: 'px-12 py-8' },
                    React.createElement("div", { className: 'flex flex-row gap-2 mb-8 items-center' },
                        React.createElement("p", { className: 'text-green-400 font-semibold text-lg' }, "New"),
                        React.createElement("p", { className: 'text-white text-lg' }, data === null || data === void 0 ? void 0 : data.duration),
                        React.createElement("p", { className: 'text-white text-lg' }, data === null || data === void 0 ? void 0 : data.genre)),
                    React.createElement("p", { className: 'text-white text-lg' }, data === null || data === void 0 ? void 0 : data.description))))));
};
exports["default"] = InfoModal;
