function removeHighlightClass() {
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('input_clicked');
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('click', () => {
            removeHighlightClass();
            input.classList.add('input_clicked');
        });

    });
});

/*validate the inputs and change aside element content on click*/
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('input[required]');
    let error = 0;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('invalid');
        error++;
      } else {
        input.classList.remove('invalid');
      }
    });
    if (error === 0) {
        const repayment = document.getElementById('repayment');
        const interest = document.getElementById('interest-only');
        document.getElementsByClassName('mortgage-form_empty')[0].style.display = "none";
        document.getElementsByClassName('mortgage-form_completed')[0].style.display = "block";
        if (repayment.checked) {
            let mortgageValues =  monthly_repayments();
            document.getElementById('month_repayment').innerHTML = mortgageValues[0];
            let total = mortgageValues[0] * mortgageValues[1];
            document.getElementById('total').innerHTML = total;
            console.log(cmortgageValuesva[0] * mortgageValues[1])
            document.getElementById('month__header').innerHTML = "Your monthly repayments are:";
        } else if (interest.checked) {
            document.getElementById('month_repayment').innerHTML = mortgage();
            document.getElementById('month__header').innerHTML = "Your interest is:";
        }

    };
  });

  /*clear inputs content*/
  document.getElementById('clear').addEventListener('click', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    document.getElementsByClassName('mortgage-form_empty')[0].style.display = "block";
    document.getElementsByClassName('mortgage-form_completed')[0].style.display = "none";
});

  /*interest only*/
// (loan amount * interest)/12
const mortgage = () => {
    const mortgage_amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value

    let monthly_interest = (mortgage_amount * interest) / 12;
    monthly_interest = parseFloat(monthly_interest).toFixed(2);
    return monthly_interest;
}

/*monthly repayments*/
const monthly_repayments = () => {
    let monthly_payment = 0;
    const mortgage_amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value / 100 / 12;
    const  term = document.getElementById('term').value;
    let numberOfPayments = term * 12;

    monthly_payment = (mortgage_amount * interest * Math.pow(1 + interest, numberOfPayments)) / (Math.pow(1 + interest, numberOfPayments) - 1);
    monthly_payment = parseFloat(monthly_payment).toFixed(2);
    return [monthly_payment, numberOfPayments];
};

