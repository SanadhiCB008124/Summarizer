document.addEventListener("DOMContentLoaded", function () {
    const savedContent = localStorage.getItem("contentInput");
    const savedSummary = localStorage.getItem("summaryOutput");

    if (savedContent) {
        document.getElementById("contentInput").value = savedContent;
    }

    if (savedSummary) {
        document.getElementById("summaryOutput").innerText = savedSummary;
        document.getElementById("loadingContainer").classList.add("hidden");
        document.getElementById("summaryContainer").classList.remove("hidden");
    } else {
        document.getElementById("summaryContainer").classList.add("hidden");
    }

    document.getElementById("summarizeButton").addEventListener("click", function () {
        let content = document.getElementById("contentInput").value;

        localStorage.setItem("contentInput", content);

        document.getElementById("loadingContainer").style.display = "block";
        document.getElementById("summaryContainer").classList.add("hidden");

        fetch("https://db54-35-229-136-24.ngrok-free.app/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: content })
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById("summaryOutput").innerText = data.summary_text;
                localStorage.setItem("summaryOutput", data.summary_text);
                document.getElementById("loadingContainer").style.display = "none";
                document.getElementById("summaryContainer").classList.remove("hidden");
            })
            .catch(error => {
                console.error("Error:", error);
                document.getElementById("loadingContainer").classList.add("hidden");
            });
    });

    document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("contentInput").value = '';
        document.getElementById("summaryOutput").innerText = '';
        localStorage.removeItem("contentInput");
        localStorage.removeItem("summaryOutput");
        document.getElementById("loadingContainer").classList.add("hidden");
        document.getElementById("summaryContainer").classList.add("hidden");
    });

    document.getElementById("copyButton").addEventListener("click", copyFunction);

    function copyFunction() {
        var copyText = document.getElementById("summaryOutput").innerText;
        navigator.clipboard.writeText(copyText).then(() => {
            console.log("Text copied to clipboard");
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    }
});
