document.addEventListener("DOMContentLoaded", () => {
    const fireworkContainer = document.getElementById("firework-container");

    function createFirework(x, y) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        for (let i = 0; i < 40; i++) { // Increased number of sparks
            const spark = document.createElement("div");
            spark.classList.add("spark");

            const sparkAngle = Math.random() * 2 * Math.PI;
            const sparkDistance = Math.random() * 150 + 70; // Increased distance for visibility
            const sparkX = Math.cos(sparkAngle) * sparkDistance;
            const sparkY = Math.sin(sparkAngle) * sparkDistance;

            const colors = ["red", "green", "blue", "yellow"];
            spark.classList.add(colors[Math.floor(Math.random() * colors.length)]);

            spark.style.setProperty("--spark-x", `${sparkX}px`);
            spark.style.setProperty("--spark-y", `${sparkY}px`);

            firework.appendChild(spark);
        }

        fireworkContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2500);
    }

    function launchFireworks() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.7; // Keep fireworks slightly above the footer
        createFirework(x, y);
    }

    setInterval(launchFireworks, 700); // Increased frequency
});
