//Listener for submit btn
document.querySelector('#Loan-form').addEventListener('submit', function(e) {
    //Hide results 
    document.getElementById('results').style.display = 'none';

    //show LOADER 
    document.getElementById('Loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// calculate results function
function calculateResults(e) {
    console.log('Calculating....');

    //UI variables for input here
    const amount = document.querySelector('#amount');
    const Interest = document.querySelector('#Interest');
    const Year = document.querySelector('#years');
   // UI vriables for results here
    const monthlyPayment = document.querySelector('#monthly-payment');
    const TotalPayment = document.querySelector('#total-payment');
    const TotalInterest = document.querySelector('#total-Interest');


    const principal = parseFloat(amount.value);
    // here i divide the input of interest rate by 100 percent divided by 12(year)

    const calculatedInterest = parseFloat(Interest.value) / 100 / 12;

    // the input of years value times 12(year)

    const calculatedPayments = parseFloat(Year.value) * 12;


    // here we compute the monthly payments
    const X = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * X * calculatedInterest) / (X - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        TotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        TotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        //show results
        document.getElementById('results').style.display = 'block';

        //hide loader
        document.getElementById('Loading').style.display = 'none';
    } else {


        // show error div
        document.querySelector('.alert-box').style.display = 'block';

        document.getElementById('Loading').style.display = 'none';
        // time duration
        setTimeout(clearError, 3000);
    }

    function clearError() {
        document.querySelector('.alert-box').remove();
    }
    // error div close

    e.preventDefault();
}