document.addEventListener("DOMContentLoaded", function() {
    const verbsData = [
        { present: "crawl", sentence: "carol crawled across the tunnel.", altSentence: "i crawled across the tunnel." },
        { present: "dive", sentence: "maria dived into the water.", altSentence: "i dived into the water." },
        { present: "fall", sentence: "santiago fell into a cave.", altSentence: "i fell into a cave." },
        { present: "jump", sentence: "i jumped around the house." },
        { present: "pull", sentence: "sebastian pulled down the balloon.", altSentence: "i pulled down the balloon." },
        { present: "push", sentence: "i pushed my friend into the house." },
        { present: "run", sentence: "i ran through the forest." },
        { present: "swim", sentence: "i swam around the swimming pool." },
        { present: "walk", sentence: "i walked along the river." },
        { present: "climb", "sentence": "i climbed up the mountain." } // Corrected typo here
    ];

    let currentPile = [...verbsData];
    let currentIndex = 0;

    const verbCard = document.getElementById("verbCard");
    const sentenceInput = document.getElementById("sentenceInput");
    const feedback = document.getElementById("feedback");

    function showVerb() {
        if (currentIndex >= currentPile.length) {
            alert("¡Excelente! You got all the sentences correct. Starting over.");
            currentIndex = 0;
        }

        const currentVerb = currentPile[currentIndex];
        verbCard.textContent = currentVerb.present;
        sentenceInput.value = "";
        feedback.textContent = "";
        sentenceInput.focus();
    }

    function checkAnswer() {
        const userSentence = sentenceInput.value.trim().toLowerCase();
        const currentVerb = currentPile[currentIndex];

        let sentenceCorrect = userSentence === currentVerb.sentence;

        if (!sentenceCorrect && currentVerb.altSentence) {
            sentenceCorrect = userSentence === currentVerb.altSentence;
        }

        let feedbackText = "";
        if (sentenceCorrect) {
            feedbackText = "✅ Correct sentence!";
            feedback.textContent = feedbackText;
            currentIndex++;
            setTimeout(showVerb, 2000);
        } else {
            feedbackText = `❌ Incorrect. The sentence should be: "${currentVerb.sentence}"`;
            feedback.textContent = feedbackText;
            sentenceInput.value = "";
            sentenceInput.focus();
        }
    }

    sentenceInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    showVerb();
});