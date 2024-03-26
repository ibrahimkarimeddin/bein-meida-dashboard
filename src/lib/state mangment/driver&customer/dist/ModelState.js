"use strict";
exports.__esModule = true;
exports.useCommonModelState = void 0;
var zustand_1 = require("zustand");
exports.useCommonModelState = zustand_1.create(function (set) { return ({
    isOpenBlock: false,
    isOpenGift: false,
    isOpenUnBlock: false,
    setIsopenBlock: function () {
        return set(function (state) { return ({ isOpenBlock: !state.isOpenBlock }); });
    },
    setIsopenUnBlock: function () {
        return set(function (state) { return ({ isOpenUnBlock: !state.isOpenUnBlock }); });
    },
    setIsopenGift: function () {
        return set(function (state) { return ({ isOpenGift: !state.isOpenGift }); });
    },
    setObjectId: function (data) {
        return set(function (state) { return ({ objectID: data }); });
    },
    objectID: 0
}); });
