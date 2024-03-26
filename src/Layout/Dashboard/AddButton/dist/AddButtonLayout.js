"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Add_Button.scss");
var react_i18next_1 = require("react-i18next");
var LayoutPagestate_1 = require("../../../lib/state mangment/LayoutPagestate");
var AddButtonLayout = function (_a) {
    var haveAddModal = _a.haveAddModal;
    var _b = LayoutPagestate_1.usePageState(), setIsOpenAddModel = _b.setIsOpenAddModel, setObjectToEdit = _b.setObjectToEdit;
    var t = react_i18next_1.useTranslation()[0];
    return (react_1["default"].createElement("div", { className: 'Add_Button', onClick: function () {
            if (haveAddModal) {
                setIsOpenAddModel();
            }
            setObjectToEdit(null);
        } },
        react_1["default"].createElement("button", null,
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: 24, height: 24 },
                    react_1["default"].createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                    react_1["default"].createElement("path", { fill: "currentColor", d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" })),
                " ",
                t("Add")))));
};
exports["default"] = AddButtonLayout;
