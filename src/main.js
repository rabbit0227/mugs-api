document.addEventListener("DOMContentLoaded", () => {
  fetchMugs();
});

async function fetchMugs() {
  try {
    const response = await fetch("/api/mugs");
    const mugs = await response.json();
    displayMugs(mugs);
  } catch (err) {
    console.error("Error fetching mugs:", err);
  }
}

function displayMugs(mugs) {
  const container = document.getElementById("mugs-container");
  container.innerHTML = "";

  // Show only the first 6 mugs
  mugs.slice(0, 6).forEach((mug) => {
    const mugElement = document.createElement("div");
    mugElement.className =
      "bg-white p-4 rounded shadow-md flex flex-col items-center";

    mugElement.innerHTML = `
        <img src="${mug.imageUrl}" alt="${mug.name}" class="w-full h-48 object-cover rounded mb-4">
        <h2 class="text-xl font-bold mb-2">${mug.name}</h2>
        <p class="text-gray-700 mb-2">${mug.description}</p>
        <p class="text-lg font-semibold mb-4">$${mug.price}</p>
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
      `;

    container.appendChild(mugElement);
  });
}
