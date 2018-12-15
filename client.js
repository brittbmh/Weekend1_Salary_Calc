console.log('js');

$(document).ready(function () {
    $('#submit').on('click', addEmployee);
    $('.results').on('click', 'li', removeLine)
});

function removeLine () {
    $(this).remove();
}

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
    let newTotal = totalMoSal.toLocaleString();
    empSalary = empSalary.toLocaleString();
    $('.results').append('<li>' + fullName + '; ' + empID + '; ' + empTitle + '; $' + empSalary + '</li>');
    $('.totalSal').html('Total Monthly Salary: $' + newTotal);
    if (totalMoSal > 20000){
        $('.totalSal').css('color', 'red');
    }
    $('.inputEE').val('');
}

