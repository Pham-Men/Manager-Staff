import IList from "./IList";
import {Staff} from "./staff";

export class List implements IList {
    protected _container: Staff[];


    constructor(container: Staff[]) {
        this._container = container;
    }

    insert(element: Staff): void {
        this._container.push(element);
    }
    getAll(): Staff[] {
        return this._container;
    }
}