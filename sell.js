// Function to generate a mock QR code
function generateMockQRCode(data) {
  // Mock QR code generation using an online service
  // Note: This is for demonstration purposes only
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    data
  )}`;
}
function toggleHowToBuy() {
  const howToSellInstructions = document.getElementById(
    "howToSellInstructions"
  );
  howToSellInstructions.style.display =
    howToSellInstructions.style.display === "none" ? "block" : "none";
}
