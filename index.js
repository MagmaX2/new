
        function updateDateTime() {
            const datetimeElement = document.getElementById('datetime');
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            datetimeElement.textContent = now.toLocaleDateString('en-US', options);
          }

    // Function to highlight the last updated cell
    function highlightLastUpdated(row, col) {
      const timetable = document.querySelector('.timetable');
      const cells = timetable.querySelectorAll('td');
      cells.forEach(cell => cell.classList.remove('highlight'));

      const targetRow = timetable.rows[row + 1]; // Account for header row
      const targetCell = targetRow.cells[col + 1];
      targetCell.classList.add('highlight');
    }

  
    const lastUpdatedRow = 1; 
    const lastUpdatedCol = 3; 

    // Highlight the last updated cell
    highlightLastUpdated(lastUpdatedRow, lastUpdatedCol);

    const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

