Papa.parse('rentsdata.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    console.log("running");
    console.log(results.data);
    const tbody = document.querySelector('#dataTable tbody');
 
    results.data.forEach(row => {
 
      const tr = document.createElement('tr');
 
      tr.innerHTML = `
        <td>${row.Year}</td>
        <td>${row.LetsToNewSocialTenants}</td>
        <td>${row.LetsToExistingTenants}</td>
        <td>${row.MutualExchanges}</td>
        <td>${row.TotalLets}</td>
      `;

      tbody.appendChild(tr); 
    });
  },
 
  error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});


