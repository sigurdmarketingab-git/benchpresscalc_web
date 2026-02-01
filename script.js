function calculateOneRepMax(event) {
  event.preventDefault();

  const weight = Number(document.getElementById("weight").value);
  const reps = Number(document.getElementById("reps").value);

  const oneRepMax = weight * (1 + reps / 30);

  const result = document.getElementById("result");
  result.textContent = `Uppskattad 1RM: ${oneRepMax.toFixed(1)} kg`;
  result.style.display = "block";
}
