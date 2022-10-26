const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            function delay(time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }

            delay(1000).then(() =>
                entry.target.classList.remove("hidden-element")
            );
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden-element");
hiddenElements.forEach((el) => observer.observe(el));
