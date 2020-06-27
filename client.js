$(document).ready(readyNow);

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
function totalMoney() {
  for (let employee of employees) {
    if (employee.reviewRating <= 2 && employee.employeeNumber.length >= 4) {
      employee.bonusPercentage = 0;
      console.log('No Bonus'); // return 'No Bonus';
    }
    if (employee.reviewRating === 3 && employee.employeeNumber.length >= 4) {
      employee.bonusPercentage = 0.04;
      console.log('4% Bonus');
    }
    if (employee.reviewRating === 4 && employee.employeeNumber.length >= 4) {
      employee.bonusPercentage = 0.06;
      console.log('6% Bonus');
    }
    if (employee.reviewRating === 5) {
      employee.bonusPercentage = 0.1;
      console.log('10% Bonus');
    }
    if (employee.annualSalary >= '65000') {
      employee.bonusPercentage -= 0.01;
      console.log('Adjusted Down Bonus:', employee.bonusPercentage);
    }
    if (employee.employeeNumber.length == 4) {
      employee.bonusPercentage += 0.05;
      console.log('New Bonus is', employee.bonusPercentage);
    }
    if (employee.bonusPercentage > 0.13) {
      employee.bonusPercentage = 0.13;
      console.log('Bonus is 13%');
    }
    if (employee.bonusPercentage < 0) {
      employee.bonusPercentage = 0;
      console.log('No Bonus');
    }
    employee.totalBonus =
      parseInt(employee.annualSalary) * employee.bonusPercentage;

    employee.bonusPercentage = parseFloat(employee.bonusPercentage);
    employee.bonusPercentage = employee.bonusPercentage.toFixed(2);
    console.log('Total Bonus', employee.totalBonus);
    employee.totalCompensation =
      parseInt(employee.annualSalary) + employee.totalBonus;
    console.log('Total Compensation', employee.totalCompensation);
    let el = $('#js-table-body');
    // employee.name
    // employee.Number
    // employee.annualSalary
    //employee.reviewRating
    // employee.bonusPercentage
    //employee.totalBonus
    // employee.totalCompensation
    console.log('meow', employee);
    el.append(
      `<tr>
        <td>${employee.name}</td>
        <td>${employee.employeeNumber}</td>
        <td>${employee.annualSalary}</td>
        <td>${employee.reviewRating}</td>
        <td>${employee.bonusPercentage}</td>
        <td>${employee.totalBonus}</td>
        <td>${employee.totalCompensation}</td>
      </tr>`
    );
  }
}

function readyNow() {
  $('#totalMoneyButton').on('click', totalMoney);
}
// totalMoney();
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

// const someArray = ['Scott', 'Myron', 'Rachael'];

// for(let i in someArray) {
//   // i = 0, 1, 2
//   const person = someArray[i];
// }

// for(let person of someArray) {
// 'Scott', 'Myron', 'Rachael
// }
