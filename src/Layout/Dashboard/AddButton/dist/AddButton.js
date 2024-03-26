"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("./Add_Button.scss");
var react_i18next_1 = require("react-i18next");
var AddButton = function (props) {
    var t = react_i18next_1.useTranslation()[0];
    return (react_1["default"].createElement("div", __assign({ className: 'Add_Button' }, props),
        react_1["default"].createElement("button", null,
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 24, height: 24 },
                    react_1["default"].createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                    react_1["default"].createElement("path", { fill: "currentColor", d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" })),
                " ",
                t("Add")))));
};
exports["default"] = AddButton;
