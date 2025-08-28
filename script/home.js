// console.log('home.js file is connected... babe!');

const validPin = 1234;


document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);
    // console.log(bank, accountNumber, amount, pin);;
    const availableBalance = document.getElementById('available-balance').innerText;
    // console.log(availableBalance);

    if (accountNumber.length !== 11) {
      alert('Account number must be 11 digit');
      return;
    }
    if (pin !== validPin) {
      alert('Invalid pin');
      return;
    }

    const newAvailableBalance = amount + parseInt(availableBalance);
    document.getElementById('available-balance').innerText =newAvailableBalance;
    
  });

  // toggling feature
  document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
  })
  document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
    
  })