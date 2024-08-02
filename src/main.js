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
  mugs.forEach((mug) => {
    const mugElement = document.createElement("div");
    mugElement.className = "bg-white p-4 rounded shadow-md";
    mugElement.innerHTML = `
        <img src="${mug.imageUrl}" alt="${mug.name}" class="w-full h-48 object-cover rounded mb-4">
        <h2 class="text-2xl font-bold mb-2">${mug.name}</h2>
        <p class="text-gray-700 mb-2">${mug.description}</p>
        <p class="text-lg font-semibold">$${mug.price}</p>
      `;
    container.appendChild(mugElement);
  });
}
