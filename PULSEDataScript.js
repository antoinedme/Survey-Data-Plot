Plotly.d3.csv('https://raw.githubusercontent.com/antoinedme/SurveyPulseView1/master/PULSEDATAVIEWIMT.csv', function(err, rows){
      
function unpack(rows, key) {
  return rows.map(function(row) { 
    return row[key]; 
  });
}

var data = [{
  type: 'parcoords',
  pad: [80,80,80,80],
  line: {
    color: unpack(rows, 'user_batch'),
    colorscale: [[0, 'grey'], [0.5, 'green'], [1, 'blue']]
  },

  dimensions: [{
    range: [20, 55],
    label: 'Age Group',
    values: unpack(rows, 'age_group')
  }, {
    range: [15, 45],
    label: 'BMI Score',
    values: unpack(rows, 'bmi_score')
  }, {
    range: [0, 30],
    label: 'Framingham (%)',
    values: unpack(rows, 'framingham')
  }, {
    range: [0, 3],
    label: 'Score',
    values: unpack(rows, 'score')
  }]
}];

var layout = {
  width: 1000,
  annotations: [
	  {showarrow: false,
      text: '',
      x: 0, y: 1, xref: 'paper', yref: 'paper'},
	  {showarrow: false,
      text: '',
      x: 0.9, y: .25, xref: 'paper', yref: 'paper'
    }]
};

Plotly.plot('graphDiv', data, layout);
  
});

