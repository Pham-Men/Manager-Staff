"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManager = void 0;
var List_1 = require("./List");
var StaffWageManager = /** @class */ (function (_super) {
    __extends(StaffManager, _super);
    function StaffManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaffManager.prototype.sumWage = function () {
        var sum = 0;
        this._container.forEach(function (i) { return sum += i._money; });
        return sum;
    };
    StaffManager.prototype.findWageMax = function () {
        var moneys = [];
        this._container.forEach(function (i) { return moneys.push(i._money); });
        return Math.max.apply(Math, moneys);
    };
    return StaffManager;
}(List_1.List));
exports.StaffManager = StaffWageManager;
