var genarateBtn = document.getElementById('genarate-btn');
genarateBtn.addEventListener('click', function () {

    var inputText = document.getElementById('input-text');
    var checkResult = document.getElementById('check-result').innerHTML;

    if(inputText.value == 0){
        alert('Enter your number');
    } else if(inputText.value % 2 === 0){
        document.getElementById('check-result').innerHTML = inputText.value + ' Even Number';
        document.getElementById('check-result').style.color = 'green';
    } else{
        document.getElementById('check-result').innerHTML = inputText.value + ' Odd Number';
        document.getElementById('check-result').style.color = 'red';
    }

   

});