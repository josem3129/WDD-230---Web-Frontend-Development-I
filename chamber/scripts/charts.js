const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 1],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function fileReader(){
    const files = {};
    
    if(files.length > 0){

        let file = files[0]
        const reader = new fileReader();

        reader.readAsText(file);

        reader.onload = function(event){
            const csvData = event.target.result;

            const rowData = csvData.split('\n')

            const tbodyEl = document.getElementById("")
        }
    }else{
        alert("please choose file.")
    }
}