console.log('js');

$(document).ready(function () {
    $('#submit').on('click', addEmployee);
    
});

let totalMoSal = 0;

function addEmployee() {
    let firstName = $('#firstNameEE').val();
    console.log(firstName);
    let lastName = $('#lastNameEE').val();
    let fullName = firstName + ' ' + lastName;
    let empID = $('#identEE').val();
    let empTitle = $('#titleEE').val();
    let empSalary = parseFloat($('#salaryEE').val());
    totalMoSal = (empSalary / 12 + totalMoSal);
    let newTotal = totalMoSal.toFixed(2)
    empSalary = empSalary.toLocaleString();
    $('.results').append('<li>' + fullName + '; ' + empID + '; ' + empTitle + '; ' + empSalary + '</li>');
    $('.totalSal').html('Total Monthly Salary: $' + newTotal);

}

