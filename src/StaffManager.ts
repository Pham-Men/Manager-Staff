import {List} from "./List";

export class StaffManager extends List {
    sumWage(): number {
        let sum: number = 0;
        this._container.forEach(i => sum += i._money)
        return sum;
    }

    findWageMax(): number {
        let moneys: number[] = [];
        this._container.forEach(i => moneys.push(i._money));
        return Math.max(...moneys);
    }
}