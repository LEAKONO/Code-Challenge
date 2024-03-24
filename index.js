
// Code Challenge

// function called calculateGrade
function calculateGrade(mark) {
    // If the mark is greater than 79, assign grade "A"
    if (mark > 79 && mark <=100) {
        return "A";
    } 
    // If the mark is between 60 and 79 , assign grade "B"
    else if (mark >= 60 && mark <= 79) {
        return "B";
    } 
    // If the mark is between 50 and 59 , assign grade "C"
    else if (mark >= 50 && mark <= 59) {
        return "C";
    } 
    // If the mark is between 40 and 49, assign grade "D"
    else if (mark >= 40 && mark <= 49) {
        return "D";
    } 
    // If the mark is less than 40, assign grade "E"
    else if (marks< 40) {
        return "E";
    }
}
console.log(calculateGrade());

// code challenge number  2

//create function called speedDetector

function speedDetector(speed){
    const speedLimit=70; //speedlimit
    const demeritPoints=Math.floor(speed-speedLimit)*0.2; //demerit points
    //speed is less or equal to speed limit return "ok"
    if(speed<=speedLimit){
        return "ok"
    }
    // if demerits points are more than 12 points return "license suspended"
    else if(demeritPoints>12){
        return "License suspended"
    }
    else{
        return `points:${demeritPoints}`;
    }
}
console.log(speedDetector());

// function calculating payee;
function calculatePayee(taxableIncome){
    if(taxableIncome <=2400){
        return taxableIncome *0.1
    }else if(taxableIncome >=24001 && taxableIncome<=32333){
        return ((taxableIncome-24000)*0.25) +(24000*0.1)
    }else if(taxableIncome >=32334 && taxableIncome <= 500000){
        return ((taxableIncome -32333)*0.3)+(24000 *0.1) + (32333*0.25)
    
    }else if (taxableIncome >=500001 && taxableIncome <=800000){
        return ((taxableIncome-500000)*0.325) +(24000*0.1)+(32333*0.25)+(500000*0.3)
    }else{
        return taxableIncome *0.35
    }
}

// create a function called CalculateNHIFDeduction;
function calculateNHIFDeduction(grossSalary) {
    // grossSalary is less or equal to 5999 return 150;
    if (grossSalary <= 5999) {
        return 150;

    } else if (grossSalary <= 7999) {
        return 300;

    } else if (grossSalary <= 11999) {
        return 400;

    } else if (grossSalary <= 14999) {
        return 500;

    } else if (grossSalary <= 19999) {
        return 600;

    } else if (grossSalary <= 24999) {
        return 750;

    } else if (grossSalary <= 29999) {
        return 850;

    } else if (grossSalary <= 34999) {
        return 900;

    } else if (grossSalary <= 39999) {
        return 950;

    } else if (grossSalary <= 44999) {
        return 1000;

    } else if (grossSalary <= 49999) {
        return 1100;

    } else if (grossSalary <= 59999) {
        return 1200;

    } else if (grossSalary <= 69999) {
        return 1300;

    } else if (grossSalary <= 79999) {
        return 1400;

    } else if (grossSalary <= 89999) {
        return 1500;

    } else if (grossSalary <= 99999) {
        return 1600;

    } else {
        return 1700;
    }
}
//create a function called calculateNSSFContribution;
function calculateNSSFContribution(grossSalary) {
    if (grossSalary < 7000) {
        return 0.06 * grossSalary;
    } else if (grossSalary <= 18000) {
        return 0.06 * grossSalary;
    } else {
        return 1080;
    }
}
// calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const taxableIncome = calculateTaxableIncome(basicSalary, benefits);
    const payee = calculatePayee(taxableIncome);
    const grossSalary = basicSalary + benefits;
    const nhifDeduction = calculateNHIFDeduction(grossSalary);
    const nssfDeduction = calculateNSSFContribution(grossSalary);
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
    return netSalary;
}

calculateNetSalary();

















