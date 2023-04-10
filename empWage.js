let wagePerHour = 20;
let isFullTime = 1;
let isPartTime = 2;
let workingDayPerMonth = 2;
let empWage, empHour, monthlyWage = 0;
// if (emp === isFullTime) {
//     console.log("Employee is present full time");
//     empHour = 8;
// }
// else if (emp === isPartTime) {
//     console.log("Employee is present part time");
//     empHour = 4;
// }
// else {
//     console.log("Employee is Absent");
//     empHour = 0;
// }
for (let i = 0; i < workingDayPerMonth; i++) {
    let emp = Math.floor(Math.random() * 3);
    switch(emp) {
        case isFullTime :
            empHour = 8;
            break;
        case isPartTime :
            empHour = 4;
            break;
        default :
            empHour = 0;
    }
    empWage = wagePerHour * empHour;
    monthlyWage += empWage;
    console.log(`Employee daily wage : ${empWage}`);
}
console.log(`Employee monthly wage : ${monthlyWage}`);


