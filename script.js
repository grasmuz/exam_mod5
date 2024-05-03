function calculate() {
    var amount = parseFloat(document.getElementById('amount').value);
    var term = parseInt(document.getElementById('term').value);
    var firstLoan = document.getElementById('firstLoan').checked;

    var totalInterest = 0;
    var interestRate = firstLoan ? 0 : 0.01; // Если первый кредит, то ставка 0, иначе 0.01 (1%)

    if (!firstLoan) {
        // Если это не первый кредит, рассчитываем сложный процент
        for (var i = 0; i < term; i++) {
            totalInterest += amount * interestRate;
            amount += amount * interestRate;
        }
    }
        // Проверка на валидность данных
        if (isNaN(amount) || isNaN(term) || amount <= 0 || term <= 0) {
        alert("Пожалуйста, введите целые числа.");
        return;
    }

    var totalAmount = amount;

    // Заполнение результатов в контейнере с результатами
    document.getElementById('resultAmount').textContent = parseFloat(document.getElementById('amount').value).toFixed(2);
    document.getElementById('resultInterestRate').textContent = (interestRate * 100).toFixed(2) + '%';
    document.getElementById('resultTerm').textContent = term;
    document.getElementById('resultTotalInterest').textContent = totalInterest.toFixed(2);
    document.getElementById('resultTotalAmount').textContent = totalAmount.toFixed(2);

    // Скрыть контейнер с формой и показать контейнер с результатами
    document.getElementById('calculatorForm').style.display = 'none';
    document.getElementById('calculatorResult').style.display = 'block';
}

function returnToCalculator() {
    // Скрыть контейнер с результатами и показать контейнер с формой
    document.getElementById('calculatorResult').style.display = 'none';
    document.getElementById('calculatorForm').style.display = 'block';
}
function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            document.addEventListener('click', closeMenuOutside);
            document.addEventListener('touchstart', closeMenuOutside);
        } else {
            document.removeEventListener('click', closeMenuOutside);
            document.removeEventListener('touchstart', closeMenuOutside);
        }
    }

    function toggleSubMenu(element) {
        element.querySelector('.dropdown-content').classList.toggle('active');
    }

    function closeMenuOutside(event) {
        var menu = document.querySelector('.menu');
        if (!menu.contains(event.target) && !event.target.classList.contains('burger-icon')) {
            menu.classList.remove('active');
            document.removeEventListener('click', closeMenuOutside);
            document.removeEventListener('touchstart', closeMenuOutside);
        }
    }
    function toggleAnswer(question) {
        // Находим ответ, который соответствует вопросу
        var answer = question.nextElementSibling;
        
        // Переключаем класс "active" у ответа, чтобы показать или скрыть его
        answer.classList.toggle('active');
    }



    function showWaiting() {
        document.getElementById("zayavkaForm").style.display = "none";
        document.getElementById("waitingScreen").style.display = "block";
        setTimeout(showApproval, 10000); // После 10 секунд вызываем функцию showApproval
      }
  
      function showApproval() {
        document.getElementById("waitingScreen").style.display = "none";
        document.getElementById("approvalMessage").style.display = "block";
      }
  
      function validateAndProceed() {
        var phoneNumber = document.getElementById("phoneNumber").value;
        var accountNumber = document.getElementById("accountNumber").value;
        var loanAmount = document.getElementById("loanAmount").value;
        var loanTerm = document.getElementById("loanTerm").value;
        var income = document.getElementById("income").value;
        var employmentType = document.getElementById("employmentType").value;
        var maritalStatus = document.getElementById("maritalStatus").value;
  
        if (
          phoneNumber.length === 12 &&
          /^\d+$/.test(phoneNumber) &&
          accountNumber.trim() !== "" &&
          !isNaN(parseFloat(loanAmount)) &&
          loanAmount > 0 &&
          !isNaN(parseInt(loanTerm)) &&
          loanTerm > 0 &&
          !isNaN(parseFloat(income)) &&
          income >= 0 &&
          employmentType !== "" &&
          maritalStatus !== ""
        ) {
          showWaiting();
        } else {
          alert("Пожалуйста, заполните все поля корректно.");
        }
      }
  
      function applyForAnotherCredit() {
        document.getElementById("approvalMessage").style.display = "none";
        document.getElementById("zayavkaForm").style.display = "block";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("accountNumber").value = "";
        document.getElementById("loanAmount").value = "";
        document.getElementById("loanTerm").value = "";
        document.getElementById("income").value = "";
        document.getElementById("employmentType").value = "";
        document.getElementById("maritalStatus").value = "";
        document.getElementById("result").style.display = "none";
      }


      function validateRegistration() {
        var fullName = document.getElementById("fullName").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var iin = document.getElementById("iin").value;
        var documentNumber = document.getElementById("documentNumber").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
    
        // Проверка на заполненность полей
        if (fullName === "" || phoneNumber === "" || iin === "" || documentNumber === "" || password === "" || confirmPassword === "") {
            alert("Пожалуйста, заполните все поля.");
            return;
        }
    
        // Проверка на совпадение паролей
        if (password !== confirmPassword) {
            alert("Пароли не совпадают.");
            return;
        }

        alert("Регистрация успешна!");
    }


    