// This waits for the HTML page to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Your CSV data
    const csvData = `"Symbol","Price","Signal","Confidence","Date"
"DANGCEM","350","BUY","82%","2026-05-27"`;

    // 2. Load PapaParse
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js";
    document.head.appendChild(script);

    script.onload = () => {
        Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            complete: function(results) {
                // Now that the page is loaded, this element WILL exist
                const tbody = document.getElementById('data-body');
                tbody.innerHTML = ""; 

                results.data.forEach(row => {
                    if (row.Symbol) {
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td>${row.Symbol}</td>
                            <td>₦${row.Price}</td>
                            <td class="${row.Signal.toLowerCase()}">${row.Signal}</td>
                            <td>${row.Confidence}</td>
                        `;
                        tbody.appendChild(tr);
                    }
                });
            }
        });
    };
});