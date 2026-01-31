function calculateOneRepMax(event) {
  event.preventDefault();

  const weight = Number(document.getElementById("weight").value);
  const reps = Number(document.getElementById("reps").value);

  const oneRepMax = weight * (1 + reps / 30);

  document.getElementById("result").textContent =
    `Uppskattad 1RM: ${oneRepMax.toFixed(1)} kg`;
}
