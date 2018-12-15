console.log('js');

$(document).ready(function () {
    $('#submit').on('click', addEmployee);
    $('.results').on('click', 'li', removeLine)
});

function removeLine () {
    $(this).remove();
}

let totalMoSal = 0;


// add Employees to Array and Calculate Monthly Salary
function addEmployee() {
    let firstName = $('#firstNameEE').val();
    console.log(firstName);
    let lastName = $('#lastNameEE').val();
    let fullName = firstName + ' ' + lastName;
    let empID = $('#identEE').val();
    let empTitle = $('#titleEE').val();
    let empSalary = parseFloat($('#salaryEE').val());
    totalMoSal = (empSalary / 12 + totalMoSal);
    totalMoSal = totalMoSal.toFixed(2);
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

