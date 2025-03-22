function calculateTotal() {
    var subtotal = Number(document.getElementById("subtotal").value) || 0;
    var tip = Number(document.getElementById("tip").value) || 0;
    var final = subtotal + (subtotal * tip / 100);
    document.getElementById("output").textContent = `Total Amount to Pay: $${final.toFixed(2)}`;
}