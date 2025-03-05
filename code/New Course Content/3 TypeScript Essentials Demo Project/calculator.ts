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

type InvestmentResult = {
   year: string;
   totalAmount: number;
   totalContributions: number;
   totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {} // => result[]

function printResults(results: number[]) {
   // print output the result data
}

const results = calculateInvestment([1, 2, 3]);

printResults(results);
