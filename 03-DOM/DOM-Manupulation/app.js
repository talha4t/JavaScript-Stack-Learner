window.onload = function() {
    main();
}; 

function main() {
    const button = document.getElementById("click-btn");
    const title = document.getElementById("title");
    const input = document.getElementById("input");
    const output = document.getElementById("output");


    // let times = 0;
    // button.onclick = function() {
    //     alert("Clicked " + times++);
    // };

    // button.addEventListener("click", function(e) {
    //     console.log(e);

    //     alert("Clicked = " + times);
    // });

    let currentTitle = title.textContent;
    let nextTitle = "Changed DOM Element";
    button.addEventListener("click", function(e) {
        title.innerText = nextTitle;

        const tmp = currentTitle;
        currentTitle = nextTitle;
        nextTitle = tmp;

        // if (title.classList.contains("title1")) {
        //     title.classList.remove("title1");
        //     title.classList.add("title2");
        // }
        // else {
        //     title.classList.remove("title2");
        //     title.classList.add("title1");
        // }

        title.classList.toggle("title1");
        title.classList.toggle("title2");
    });

    input.addEventListener("focus", function() {
        input.style.padding = "0.5rem 1rem";
    });

    input.addEventListener("blur",function() {
         input.style.padding = "0";
    }); 

    input.addEventListener("keyup", function(e) {
        output.innerText = e.target.value;
    });
}