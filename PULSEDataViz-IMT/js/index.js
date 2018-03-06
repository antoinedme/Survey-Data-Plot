Plotly.d3.csv('https://raw.githubusercontent.com/antoinedme/SurveyPulseView1/master/PULSEDATAVIEWIMT.csv', function(err, rows){   
function unpack(rows, key) {
  return rows.map(function(row) { 
    return row[key]; });}

var data = [{
  type: 'parcoords',
  pad: [80,80,80,80],
  line: {
    color: unpack(rows, 'age_group'),
    colorscale: [[0, '#00cc66'], [0.5, '#00ffff'], [1, '#0066ff']]
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
    label: 'Risk Score',
    values: unpack(rows, 'score')
  }, {
    range: [0, 15000],
    label: 'Montlhy Steps',
    values: unpack(rows, 'monthly_steps')
  }]
}];

var layout = {
  width: 800,
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

