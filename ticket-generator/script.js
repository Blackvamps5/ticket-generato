// Live text updates
const liveInputs = {
    inputSection: "section",
    inputRow: "row",
    inputSeat: "seat",
    inputMatch: "match",
    inputDate: "date",
    inputLevel: "level"
    };
    
    Object.keys(liveInputs).forEach(inputId => {
    document.getElementById(inputId).addEventListener("input", function() {
    document.getElementById(liveInputs[inputId]).innerText = this.value;
    });
    });
    
    // Upload image from device
    document.getElementById("inputImage").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
    document.getElementById("ticketImage").src = e.target.result;
    };
    reader.readAsDataURL(file);
    }
    });
    
    // Dynamic time update
    function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    document.getElementById("time").innerText = `${hours}:${minutes}`;
    }
    setInterval(updateTime, 60000);
    updateTime();
    
    // Download Ticket
    function downloadTicket() {
    html2canvas(document.getElementById("ticket")).then(canvas => {
    let link = document.createElement("a");
    link.download = "ticket.png";
    link.href = canvas.toDataURL();
    link.click();
    });
    }