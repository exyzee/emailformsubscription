document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("email-subscription-form");
    const emailInput = document.getElementById("subscription-email");
    const alertMsg = document.getElementById("alert-msg");
    const button = document.getElementById("subscribe-btn");
    const inputHistory = [];

    // Function to validate email format
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Function to display alert message
    function showAlert(message, type = 'error') {
        alertMsg.textContent = message;
        alertMsg.className = `alert ${type}`;
        alertMsg.style.display = "block";
        emailInput.classList.add('shake');
        setTimeout(function() {
            alertMsg.style.display = "none";
            emailInput.classList.remove('shake');
        }, 1000);
    }

    // Function to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (!email) {
            showAlert("Please enter your email address.");
            return;
        }

        if (!validateEmail(email)) {
            showAlert("Please enter a valid email address.");
            return;
        }

        // Simulate subscription process (replace with actual backend logic)
        subscribe(email);
    });

    // Function to simulate subscription process
    function subscribe(email) {
        // Simulate subscription process
        showAlert(`Subscribed successfully! Email: ${email}`, 'success');
        // Clear input field after subscription
        emailInput.value = "";

        // Trigger confetti animation
        shootConfetti();
    }

    // Function to trigger confetti animation
    function shootConfetti() {
        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ["star"],
            colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
          };
          
          function shoot() {
            confetti({
              ...defaults,
              particleCount: 40,
              scalar: 1.2,
              shapes: ["star"],
            });
          
            confetti({
              ...defaults,
              particleCount: 10,
              scalar: 0.75,
              shapes: ["circle"],
            });
          }
          
          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
    }

    // Function to handle input history and display on success
    function displayInputHistory() {
        if (inputHistory.length > 0) {
            let message = "Here's a printout of all the attempts:\n";
            inputHistory.forEach(function(entry, index) {
                message += `${index + 1}. ${entry}\n`;
            });
            showAlert(message, 'success');
        }
    }

    // Display input history when page loads
    displayInputHistory();
});
