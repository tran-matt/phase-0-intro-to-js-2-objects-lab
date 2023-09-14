const employee = {
    name: "Sam",
    streetAddress: "Sunny St",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = { 
        ...employee,
        [key]: value,
    };
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employeeClone = {...employee};
    delete employeeClone[key];
    return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}