"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var List = /** @class */ (function () {
    function List(container) {
        this._container = container;
    }
    List.prototype.insert = function (element) {
        this._container.push(element);
    };
    List.prototype.getAll = function () {
        return this._container;
    };
    return List;
}());
exports.List = List;
