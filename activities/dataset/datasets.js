const items = document.querySelectorAll("#items li");
const details = document.querySelector("#details");

items.forEach((item) => {
    console.log("Name:", item.dataset.name);
    console.log("Category:", item.dataset.category);
    console.log("Color:", item.dataset.color);

    item.addEventListener("click", () => {
        details.innerHTML = `
      <h2>Item Details</h2>
      <p><strong>Name:</strong> ${item.dataset.name}</p>
      <p><strong>Category:</strong> ${item.dataset.category}</p>
      <p><strong>Color:</strong> ${item.dataset.color}</p>
    `;
    });
});