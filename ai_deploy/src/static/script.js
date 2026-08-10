async function analyzeMessage() {

    const message = document.getElementById("message").value;

    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    const response = await fetch("/predict", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: message
        })

    });

    const data = await response.json();

    document.getElementById("result").style.display = "block";

    const prediction = document.getElementById("prediction");
    const confidence = document.getElementById("confidence");

    prediction.innerHTML = "Prediction: " + data.prediction;

    confidence.innerHTML = "Confidence: " + data.confidence + "%";

    if (data.prediction === "Spam") {

        prediction.className = "spam";

    } else {

        prediction.className = "notspam";

    }

}