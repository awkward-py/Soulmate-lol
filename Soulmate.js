const soulmateMessages = [
  "Your soulmate is an artist who paints the canvas of life with vibrant colors.",
  "In the realm of creativity, your soulmate is the melody to your song.",
  "Your soulmate is a poet who weaves words into the tapestry of your heart.",
  "Together with your soulmate, you'll dance through the choreography of life.",
  "In the library of love, your soulmate is the story written just for you.",
  "Your soulmate is a chef, adding the perfect blend of flavors to your journey.",
  "Through the lens of life, your soulmate captures the beautiful moments."
];

function generateSoulmateMessage() {
  const randomIndex = Math.floor(Math.random() * soulmateMessages.length);
  const randomMessage = soulmateMessages[randomIndex];
  return randomMessage;
}

console.log("Your Soulmate Creative Message:");
console.log(generateSoulmateMessage());
