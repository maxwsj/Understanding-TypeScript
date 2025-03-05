// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
   initialAmount: number;
   annualContribution: number;
   expectedReturn: number;
   duration: number;
};

function calculateInvestment(data: InvestmentData) {} // => result[]

function printResults(results: number[]) {
   // print output the result data
}

const results = calculateInvestment([1, 2, 3]);

printResults(results);
