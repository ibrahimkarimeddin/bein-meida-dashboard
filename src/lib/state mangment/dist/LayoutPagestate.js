"use strict";
exports.__esModule = true;
exports.usePageState = void 0;
var zustand_1 = require("zustand");
exports.usePageState = zustand_1.create(function (set) { return ({
    isOpenAddModel: false,
    isOpenEditModel: false,
    objectToEdit: null,
    isThemChanged: false,
    setThemChange: function () {
        return set(function (state) { return ({ isThemChanged: !state.isThemChanged }); });
    },
    setIsOpenAddModel: function () {
        return set(function (state) { return ({ isOpenAddModel: !state.isOpenAddModel }); });
    },
    setIsOpenEditModel: function () {
        return set(function (state) { return ({ isOpenEditModel: !state.isOpenEditModel }); });
    },
    CloseAllModal: function () {
        return set(function (state) { return ({ isOpenAddModel: false, isOpenEditModel: false }); });
    },
    setObjectToEdit: function (data) { return set(function () { return ({ objectToEdit: data }); }); }
}); });
