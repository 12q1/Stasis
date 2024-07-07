// index.js
const body = document.querySelector("body");

// Handle Link Grid
(() => {
    const data = JSON.parse(document.getElementById('links').textContent);
    const grid = document.createElement("div");
    const gridContainer = document.createElement("grid-container");
    grid.id = "grid";
    gridContainer.id = "grid-container";
    body.appendChild(gridContainer);
    gridContainer.appendChild(grid)
    Object.keys(data).forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = "category-container";
        const title = document.createElement("h3");
        title.textContent = category;
        categoryContainer.appendChild(title);
        title.className = "category-title";
        const list = document.createElement("ul");
        categoryContainer.appendChild(list);
        grid.appendChild(categoryContainer);
        Object.keys(data[category]).forEach(link => {
            const listItem = document.createElement("li");
            const linkElement = document.createElement("a");
            linkElement.href = data[category][link];
            linkElement.textContent = link;
            list.appendChild(listItem);
            listItem.appendChild(linkElement);
        })
    })
})();