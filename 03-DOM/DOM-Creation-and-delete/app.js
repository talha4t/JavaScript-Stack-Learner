window.onload = function() {
    main();
};

function main() {
    const input = document.getElementById("input-name");
    const addButton = document.getElementById("add-button");
    const nameList = document.getElementById("name-list");

    addButton.addEventListener("click", function() {
        if (input.value) {
            const li = document.createElement("li");
            
            li.setAttribute("title", "List Title");
            
            li.innerText = input.value;
            li.addEventListener("click", function() {
                li.remove();
            });
            nameList.appendChild(li);

            input.value = "";
        }
    });
}