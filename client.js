console.log('js');

$(document).ready(function () {
    $('#submit').on('click', addEmployee);
    $('#submit').on('click', newEEToTable);
    $('#empTable').on('click', 'tr', removeLine)
});

function removeLine () {
    console.log(this);
    $(this).remove();
}

let monthSal = 0;


// add Employees to Array and Calculate Monthly Salary
function addEmployee() {
    let firstName = $('#firstNameEE').val();
    // console.log(firstName);
    let lastName = $('#lastNameEE').val();
    // let fullName = firstName + ' ' + lastName;
    let empID = $('#identEE').val();
    let empTitle = $('#titleEE').val();
    let empSalary = parseFloat($('#salaryEE').val());
    monthSal = (empSalary / 12 + monthSal);
    let totalMoSal = monthSal.toFixed(2);
    empSalary = empSalary.toFixed(2);
    // $('.results').append('<li>' + fullName + '; ' + empID + '; ' + empTitle + '; $' + empSalary + '</li>');
    $('.totalSal').html('Total Monthly Salary: $' + totalMoSal);
    if (totalMoSal > 20000){
        $('.totalSal').css('color', 'red');
    }
    $('.inputEE').val('');
    let newEE = new Employee(firstName, lastName, empID, empTitle, empSalary);
    staff.push(newEE);
    
}

function newEEToTable() {
    $('.bodyEETable').empty();
    for (employee of staff){
        $('.bodyEETable').append('<tr class="emp"><td>' + employee.firstName + '</td><td>' + employee.lastName + '</td><td>' + employee.empID + '</td><td>' + employee.empTitle + '</td><td>' + employee.empSalary + '</td></tr>')
    };
}

let staff = [];

class Employee {
    constructor (firstNameIn, lastNameIn, empIDIn, empTitleIn, empSalaryIn) {
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
        this.empID = empIDIn;
        this.empTitle = empTitleIn;
        this.empSalary = empSalaryIn;
    }
};

