document.addEventListener('DOMContentLoaded', function() {
    const enrollButton = document.getElementById('enroll-button');
    enrollButton.addEventListener('click', function() {
        alert('You have enrolled in the course!');
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                alert('Marked as completed!');
            }
        });
    });

    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    sendButton.addEventListener('click', function() {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            const userMessageDiv = document.createElement('div');
            userMessageDiv.textContent = `User: ${userMessage}`;
            chatMessages.appendChild(userMessageDiv);

            // Simulate AI response
            const aiMessageDiv = document.createElement('div');
            aiMessageDiv.textContent = `AI: Here's a summary of the video.`;
            chatMessages.appendChild(aiMessageDiv);

            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});
