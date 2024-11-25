/*                        Q1. Conditional Discounts with if-else
Write a function, calculateDiscount(price, customerType), that calculates discounts based on customer type:

"premium" customers get a 20% discount,
"regular" customers get a 10% discount,
others get a 5% discount. Return the final price after discount. Include an error check for negative prices or invalid customer types.  */

let finalprice;
let calculateDiscount = function (price, customerType) {
    if (customerType == "premium") {
        finalprice = price - 20 / 100 * price;
        return ` your finalprice of product is ${finalprice}; `
    }
    else if (customerType == "regular") {
        finalprice = price - 10 / 100 * price;
        return `your finalprice of product is ${finalprice};`
    }
    else {
        finalprice = price - 5 / 100 * price;
        return ` your finalprice of product is ${finalprice};`
    }
}
console.log(calculateDiscount(20, "premium"));
/*                                 Q2. Prime Number Finder with for loop
Create a function, findPrimes(limit), that returns an array of all prime numbers up to a given limit. Use a for loop to check each number and only add it to the array if it's prime.                      */

let count = 0;
let arr = [];
let find_primes = function (uservalue) {
    let is_prime = true;
    for (i = 2; i < uservalue; i++) {
        if (uservalue % i == 0) {
            is_prime = false;
        }
    }
    if (is_prime) {
        arr.push(uservalue)
    }
    return count;
}


let limit = 20;

for (j = 2; j <= limit; j++) {
    find_primes(j)
}

/*                          Q3. Grading System with switch case
Write a function, getGrade(score), that assigns grades based on a score using switch case:
90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
Below 60: "F" Use Math.floor(score / 10) in your switch statement.                            */

// let getGrade = function (score) {
//     switch (Math.floor(score / 10)) {
//         case 10:
//         case 9:
//             console.log(`you Grading is A`);
//             break;
//         case 8:
//             console.log(`your Grading is B`);
//             break;
//         case 7:
//             console.log(`your Grading is C`);
//             break;
//         case 6:
//             console.log(`your Grading is D`);
//             break;
//         default:
//             console.log(`your Grading is F`);


//     }
// }
// getGrade(99)
// getGrade(70)
// getGrade(24)

/*                                 Q4. Nested Object Traversal
Define an object, company, with nested structures to represent departments and employees. Write a function, getEmployeeNames(departmentName), that returns an array of all employee names in the specified department. Assume the company object has the following structure:
const company = {
    HR: { employees: [{ name: "Alice" }, { name: "Bob" }] },
    IT: { employees: [{ name: "Charlie" }, { name: "David" }] },
    Finance: { employees: [{ name: "Eve" }, { name: "Frank" }] }
}; */

// const company = {};
// company.hr = {};
// company.hr.employee = [];

// const hremployee_1 = {}, hremployee_2 = {};
// hremployee_1.name = "AMIT"
// hremployee_2.name = "KUMAR"

// company.hr.employee.push(hremployee_1, hremployee_2);

// company.it = {};
// company.it.employee = [];
// const itemployee_1 = {}, itemployee_2 = {};
// itemployee_1.name = "VICKI"
// itemployee_2.name = "KUMAR"
// company.it.employee.push(itemployee_1, itemployee_2);

// company.Finance = {};
// company.Finance.employee = [];

// const Finance_employee_1 = {}, Finance_employee_2 = {};

// let getEmployeeNames = function (departmentName) {
//     if (departmentName == "hr") {
//         return company.hr;
//     }
//     else if (departmentName == "it") {
//         return company.it;
//     }
//     else {
//         return company.Finance;
//     }
// }

// console.log(getEmployeeNames("it"));
// console.log(company);

/*                               Q5. Object Method with Conditional if-else
Create an object, bankAccount, with properties balance and accountType (savings, current). Write a method withdraw(amount) that:
Deducts the amount from the balance if it's less than or equal to the balance.
Adds a 10% penalty if the account type is "current" and the balance becomes negative. Return the updated balance after the operation. */

// const bank_Account = {
//     Balance: 1000,
//     Account_Type: "savings",

//     Withdraw(Amount) {
//         if (Amount <= bank_Account.Balance) {
//             return Account_Balance = bank_Account.Balance - Amount;
//         }
//         else {
//             if (bank_Account.Account_Type === "savings") {
//                 return " There is not enough balance in your account";
//             }
//             else if (bank_Account.Account_Type === "current") {
//                 Account_Balance = bank_Account.Balance - Amount;
//                 if (bank_Account.Balance < 0) {
//                     bank_Account.Balance = bank_Account.Balance * 1.1;
//                 }
//             }
//         }
//         return Account_Balance;
//     }
// }
// console.log(bank_Account.Withdraw(100));

/*                             Q6. Student Grades with for loop and switch case
Define an array of objects, students, where each student has properties name and score. Write a function assignGrades(students) that assigns each student a grade (A-F) based on their score using a for loop and switch case. Update each student object with a new grade property */

// function assignGrades() {
//     let sum = 0;
//     for (let a = 0; a < students.length; a++) {
//         sum = sum + students[a];
//     }
//     return sum;
// }
// let arr = [
//     students_1 = {
//         name: "AMIT",
//         score: [70, 74, 92, 29, 30],
//     },
//     students_2 = {
//         name: "AMIT",
//         score: [73, 71, 52, 39, 20],
//     },
//     students_3 = {
//         name: "AMIT",
//         score: [40, 54, 12, 49, 50],
//     },
//     students_4 = {
//         name: "AMIT",
//         score: [17, 75, 90, 89, 40],
//     }
// ];

// console.log(assignGrades(students_1.score, students_2.score, students_3.score, students_4.score));
