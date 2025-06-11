async function fetchData() {
  const response = await fetch("/api/bus-arrivals");
  const data = await response.json();
  
  let html = "";
  data.forEach(hawker => {
    html += `<h2>${hawker.hawkerCentre} ${hawker.openToday ? "✅" : "❌"}</h2>`;
    hawker.busStops.forEach(stop => {
      html += `<p><strong>${stop.name}</strong><br>`;
      stop.buses.forEach(bus => {
        html += `→ Bus ${bus.number}: ${bus.arrivalInMin} min<br>`;
      });
      html += "</p>";
    });
  });
  document.getElementById("content").innerHTML = html;
}
fetchData();
