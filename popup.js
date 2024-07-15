document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("summarizeButton").addEventListener("click", function () {
        let content = document.getElementById("contentInput").value;

        fetch("https://579c-35-185-239-132.ngrok-free.app/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: content })
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById("summaryOutput").innerText = data.summary_text;
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});

window.addEventListener('load', () => {
    const button = document.querySelector('#clear');
    const contentInput = document.getElementById('contentInput');

    button.addEventListener('click', () => {
        contentInput.value = '';
    });
});

document.getElementById("copyButton").addEventListener("click", copyFunction);
function copyFunction(){
    var copyText = document.getElementById("summaryOutput").innerText;
    navigator.clipboard.writeText(copyText).then(() => {
        console.log("Text copied to clipboard");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

