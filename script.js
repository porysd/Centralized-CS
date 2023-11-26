const tabLogos = document.querySelectorAll('.tab-logo');
const tabContents = document.querySelectorAll('.tab-content');

tabLogos.forEach((tabLogo, index) => {
    tabLogo.addEventListener('click', () => {

        // Hide all tab contents
        tabContents.forEach(content => content.style.display = 'none');
        
        // Show the selected tab content
        tabContents[index].style.display = 'block';
    });
});


var mySwiper = new Swiper('.sub-tabs', {
    slidesPerView: 'auto',
    loop: true,
    initialSlide: 0, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


var tabButtons = document.querySelectorAll('.swiper-slide');
tabButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        mySwiper.slideTo(index);
    });
});





function showFeedbackForm() {
    document.getElementById('initialButtons').style.display = 'none';
    document.getElementById('feedbackForm').style.display = 'block';
    document.getElementById('confirmationMessage').style.display = 'none';
  }

  function showReportForm() {
    document.getElementById('initialButtons').style.display = 'none';
    document.getElementById('reportForm').style.display = 'block';
    document.getElementById('confirmationMessage').style.display = 'none';
  }

  function sendFeedback() {
    if (validateFeedbackForm()) {
      showConfirmationMessage('Thanks for giving feedback!');
      showInitialButtons();
      resetForm('feedbackForm');
    }
  }

  function submitReport() {
    if (validateReportForm()) {
      showConfirmationMessage('Thanks for submitting a report!');
      showInitialButtons();
      resetForm('reportForm');
    }
  }

  function validateFeedbackForm() {
    var email = document.getElementById('schoolEmail').value;
    var message = document.getElementById('feedbackMessage').value;

    if (!email || !message) {
      alert('Please fill in all fields.');
      return false;
    }

    return true;
  }

  function validateReportForm() {
    var reportType = document.getElementById('reportType').value;
    var message = document.getElementById('reportMessage').value;

    if (reportType === 'other') {
      var otherReportType = document.getElementById('otherReportType').value;
      if (!otherReportType || !message) {
        alert('Please fill in all fields.');
        return false;
      }
    } else {
      if (!reportType || !message) {
        alert('Please fill in all fields.');
        return false;
      }
    }

    return true;
  }

  function showConfirmationMessage(message) {
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = message;
    confirmationMessage.style.display = 'block';
    setTimeout(function () {
      confirmationMessage.style.display = 'none';
    }, 2000);
  }

  function showInitialButtons() {
    document.getElementById('initialButtons').style.display = 'flex';
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('reportForm').style.display = 'none';
  }

  function resetForm(formId) {
    var form = document.getElementById(formId);
    form.clear();
  }

  function checkOtherOption() {
    var reportTypeDropdown = document.getElementById('reportType');
    var otherOptionDiv = document.getElementById('otherOption');
    var otherReportTypeInput = document.getElementById('otherReportType');

    if (reportTypeDropdown.value == 'other') {
      otherOptionDiv.style.display = 'block';
      otherReportTypeInput.setAttribute('required', 'required');
    } else {
      otherOptionDiv.style.display = 'none';
      otherReportTypeInput.removeAttribute('required');
    }
  }