const codeInput = document.getElementById("codeInput");
const convertedCode = document.getElementById("convertedCode");
const copyBtn = document.getElementById("copyBtn");

codeInput.addEventListener("dragover", function(event) {
    event.preventDefault();
});

codeInput.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.dataTransfer.items) {
        let file = event.dataTransfer.items[0].getAsFile();
        let reader = new FileReader();
        reader.onload = function(event) {
            codeInput.value = event.target.result;
        };
        reader.readAsText(file);
    }
});

copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(convertedCode.value).then(function() {
        // Success
        // Start a scale animation on button click
        anime({
            targets: copyBtn,
            scale: [1, 1.2, 1], // Scale up and then back down
            duration: 400, // The animation should last 400ms
            easing: 'easeInOutQuad', // Use a smooth easing function
        });

        // Fade out the current text
        anime({
            targets: copyBtn,
            opacity: 0,
            duration: 500,
            easing: 'linear',
            complete: function() {
                // When the animation is complete, change the text
                copyBtn.textContent = '👍';
                
                // And start a new animation to fade in the new text
                anime({
                    targets: copyBtn,
                    opacity: 1,
                    duration: 500,
                    easing: 'linear',
                    complete: function() {
                        // After 2 seconds, revert the button text back to 'Copy Code'
                        setTimeout(function() {
                            anime({
                                targets: copyBtn,
                                opacity: 0,
                                duration: 500,
                                easing: 'linear',
                                complete: function() {
                                    copyBtn.textContent = 'Copy Code';
                                    anime({
                                        targets: copyBtn,
                                        opacity: 1,
                                        duration: 500,
                                        easing: 'linear',
                                    });
                                }
                            });
                        }, 2000);
                    }
                });
            }
        });
    }, function(err) {
        // Error
        alert('Failed to copy text: ' + err);
    });
});