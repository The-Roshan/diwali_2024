document.addEventListener("DOMContentLoaded", () => {
    const fireworkContainer = document.getElementById("firework-container");

    function createFirework(x, y) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        // Create multiple sparks for a firework burst
        for (let i = 0; i < 30; i++) {
            const spark = document.createElement("div");
            spark.classList.add("spark");

            // Random spark direction and distance
            const sparkAngle = Math.random() * 2 * Math.PI;
            const sparkDistance = Math.random() * 100 + 50;
            const sparkX = Math.cos(sparkAngle) * sparkDistance;
            const sparkY = Math.sin(sparkAngle) * sparkDistance;

            // Assigning random spark color
            const colors = ["red", "green", "blue", "yellow"];
            spark.classList.add(colors[Math.floor(Math.random() * colors.length)]);

            // Set CSS variables for spark movement
            spark.style.setProperty("--spark-x", `${sparkX}px`);
            spark.style.setProperty("--spark-y", `${sparkY}px`);

            // Add the spark to the firework
            firework.appendChild(spark);
        }

        fireworkContainer.appendChild(firework);

        // Remove firework after animation completes
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    

    // Randomly generate fireworks
    function launchFireworks() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFirework(x, y);
    }

    // Launch fireworks at intervals
    setInterval(launchFireworks, 1000);
});

