const predefinedAnswers = [
    {
      question: /tell me about yourself|who are you|what can you do/i,
      answer: `
      I am your helpful financial assistant bot, here to provide you with a range of financial services and information to help you manage your finances better.
  
      - General Financial Tips: Practical financial advice tailored to your specific goals.
      - Schedule Appointments: Assistance in scheduling an appointment with a banker.
      - Policy Information: Detailed information about various banking policies.
      - Locate Nearest Branch or ATM: Find the nearest bank branch or ATM based on your location.
      - Investment Advice: Expert advice aligned with your financial goals.
      - Loan EMI Calculator: Calculate your monthly loan EMIs by inputting the loan amount, interest rate, and tenure.
      - Loan Information: Details about your existing loans, including balances and repayment schedules.
      - Transaction History: Retrieve your transaction history by specifying your account number and date range.
  
      How can I assist you today?
      `
    },
    {
      question: /home loans|home loan eligibility|tell me about home loans/i,
      answer: `
      A home loan, also known as a mortgage, is a loan provided by banks or financial institutions to help you purchase a home or property. Here's what you should know:
  
      - Loan Amount: Depends on your income, credit score, and property value.
      - Interest Rate: Can be either fixed or floating.
      - Tenure: Ranges from 5 to 30 years.
      - Down Payment: Typically, you need to pay 10-20% upfront.
      - EMI: Monthly payments covering both principal and interest.
      - Eligibility: Based on income, age, credit score, employment status, existing liabilities, property value, and location.
  
      If you need further details or assistance with EMI calculations, I'm here to help!
      `
    },
    {
      question: /financial advice|give me some financial advice/i,
      answer: `
      I can provide financial advice based on your goals. Whether you're saving for a house, planning for retirement, or building an emergency fund, I can guide you.
  
      Please specify your financial goal, and I'll offer tailored advice.
      `
    },
    {
      question: /how to improve my credit score|improve credit score/i,
      answer: `
      To improve your credit score:
  
      - Pay your bills on time consistently.
      - Keep your credit card balances low.
      - Avoid applying for new credit frequently.
      - Check your credit report for errors and dispute them if necessary.
      - Maintain a healthy mix of credit types.
      - Aim to reduce outstanding debt gradually.
      `
    },
    {
      question: /what is a mutual fund|explain mutual funds/i,
      answer: `
      A mutual fund is an investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. 
  
      It's managed by professional fund managers and offers an easy way to diversify your investments.
      `
    },
    {
      question: /how can i reduce my debt|tips to reduce debt/i,
      answer: `
      To reduce your debt:
  
      - Create a budget to track your income and expenses.
      - Prioritize paying off high-interest debts first.
      - Consider debt consolidation if you have multiple high-interest debts.
      - Cut down on unnecessary expenses and allocate the savings to debt repayment.
      - Avoid taking on new debt until existing ones are under control.
      `
    },
    {
      question: /what is an emergency fund|importance of emergency fund/i,
      answer: `
      An emergency fund is a financial safety net designed to cover unexpected expenses, such as medical emergencies or car repairs. 
  
      It typically consists of 3 to 6 months' worth of living expenses, ensuring you have a cushion in case of financial hardships.
      `
    },
    {
      question: /how to plan for retirement|retirement planning tips/i,
      answer: `
      Planning for retirement involves:
  
      - Setting clear financial goals.
      - Regularly contributing to retirement accounts like 401(k)s or IRAs.
      - Diversifying your investments to manage risk.
      - Reviewing your retirement plan periodically and adjusting it based on life changes.
      - Considering working with a financial advisor for a comprehensive strategy.
      `
    },
    {
      question: /how to save for education|education savings tips/i,
      answer: `
      To save for education:
  
      - Consider using 529 plans, which offer tax advantages for educational expenses.
      - Start saving early to take advantage of compound interest.
      - Explore scholarships and grants to reduce the amount needed from savings.
      - Set up a dedicated savings account for education costs.
      `
    },
    {
      question: /what is an investment portfolio|explain investment portfolios/i,
      answer: `
      An investment portfolio is a collection of financial assets such as stocks, bonds, and real estate. 
  
      Diversifying your portfolio helps manage risk and optimize returns. Regularly review your portfolio to ensure it aligns with your financial goals and risk tolerance.
      `
    },
    {
      question: /how to build wealth|wealth-building strategies/i,
      answer: `
      Building wealth involves:
  
      - Long-term planning and consistent saving.
      - Investing in a diversified portfolio.
      - Living within your means and avoiding unnecessary debt.
      - Continuously educating yourself on financial matters to make informed decisions.
      `
    },
    {
      question: /what is a credit score|explain credit score/i,
      answer: `
      A credit score is a numerical representation of your creditworthiness, based on your credit history. 
  
      Scores typically range from 300 to 850, with higher scores indicating better credit. Lenders use it to assess your ability to repay loans, and a higher score can lead to better interest rates and loan terms.
      `
    },
    {
      question: /what is a loan|types of loans/i,
      answer: `
      A loan is a sum of money borrowed from a lender that must be repaid with interest. Common types include:
  
      - Personal Loans: Unsecured loans used for various personal expenses.
      - Home Loans: Secured loans used to purchase property.
      - Auto Loans: Secured loans used to purchase vehicles.
      - Student Loans: Loans used to finance education.
      `
    }
  ];
  
  export default predefinedAnswers;
  