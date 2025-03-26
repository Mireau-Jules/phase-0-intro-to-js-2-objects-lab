// Write your solution in this file!
const employee = {
    name: "jean",
    streetAddress: "#1, delmas",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]:value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
   return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const copyEmployee = { ...employee }; 
    delete copyEmployee[key]; 
    return copyEmployee; 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}