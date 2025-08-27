// console.log('script filw is connected... babe!');
// login button functionality
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('login button clicked... babe!');
    // console.log(e);
    const mobileNumber = 1234567890;
    const pinNumber = 1234;
    const mobileNumberValue = parseInt(document.getElementById('mobile-number').value);
    const pinNumberValue = parseInt(document.getElementById('pin-number').value)
    // console.log(mobileNumberValue, pinNumberValue);
    if (mobileNumber === mobileNumberValue && pinNumber == pinNumberValue) {
        // console.log('login successful... babe!');
        window.location.href = "home.html";
        
    }
    else {
        // console.log('login failed... babe!');
        alert('Invalid credentials. Please try again.');
    }
    
    
})