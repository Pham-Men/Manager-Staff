import {Staff} from "./src/staff";
import {StaffManager} from "./src/StaffManager";

let staffList: StaffManager = new StaffManager([]);

const staff1: Staff = new Staff("1", 1000);
const staff2: Staff = new Staff("2", 2000);
const staff3: Staff = new Staff("3", 3000);

staffList.insert(staff1);
staffList.insert(staff2);
staffList.insert(staff3);

console.log(staffList.sumWage());
console.log(staffList.findWageMax());
console.table(staffList.getAll())