const faqContainer = document.getElementById('faq-container');

// Fetch the FAQs from the JSON file
fetch('faqs.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(faqs => {
        faqs.forEach((faq) => {
            const faqDiv = document.createElement('div');
            faqDiv.classList.add('faq');

            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.textContent = faq.question;

            const answerDiv = document.createElement('div');
            answerDiv.classList.add('answer');
            answerDiv.textContent = faq.answer;

            questionDiv.addEventListener('click', () => {
                answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none';
            });

            faqDiv.appendChild(questionDiv);
            faqDiv.appendChild(answerDiv);
            faqContainer.appendChild(faqDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
