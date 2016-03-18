// NO2

var chart_no2 = c3.generate({
  bindto: '#chart_no2',
  data: {
    x: 'Date',
    url: 'https://raw.githubusercontent.com/airsense/airsense/master/public/data/hamilton-2014-no2-parsed.csv',
    type: 'spline'
  },
  axis : {
      x : {
          type : 'timeseries',
          tick: {
              format: '%Y-%m-%d',
              count : 20
          },
          label: {
            text: 'Date',
            position: 'outer-center',
          }
      },
      y : {
        label: {
           text: 'NO2 [parts per billion]',
           position: 'outer-middle',
        }
      }
  },
  legend: {
    show: false
  },
  zoom: {
    enabled: true
  }
});
console.log('hi');
// CO

var chart_co = c3.generate({
  bindto: '#chart_co',
  data: {
    x: 'Date',
    url: 'https://raw.githubusercontent.com/airsense/airsense/master/public/data/hamilton-2014-co-parsed.csv',
    type: 'spline'
  },
  axis : {
      x : {
          type : 'timeseries',
          tick: {
              format: '%Y-%m-%d',
              count : 20
          },
          label: {
            text: 'Date',
            position: 'outer-center',
          }
      },
      y : {
        label: {
           text: 'CO [parts per million]',
           position: 'outer-middle',
        }
      }
  },
  legend: {
    show: false
  },
  zoom: {
    enabled: true
  }
});

// O3

var chart_o3 = c3.generate({
  bindto: '#chart_o3',
  data: {
    x: 'Date',
    url: 'https://raw.githubusercontent.com/airsense/airsense/master/public/data/hamilton-2014-o3-parsed.csv',
    type: 'spline'
  },
  axis : {
      x : {
          type : 'timeseries',
          tick: {
              format: '%Y-%m-%d',
              count : 20
          },
          label: {
            text: 'Date',
            position: 'outer-center',
          }
      },
      y : {
        label: {
           text: 'O3 [parts per billion]',
           position: 'outer-middle',
        }
      }
  },
  legend: {
    show: false
  },
  zoom: {
    enabled: true
  }
});

// PM2.5

var chart_pm25 = c3.generate({
  bindto: '#chart_pm25',
  data: {
    x: 'Date',
    url: 'https://raw.githubusercontent.com/airsense/airsense/master/public/data/hamilton-2014-pm25-parsed.csv',
    type: 'spline'
  },
  axis : {
      x : {
          type : 'timeseries',
          tick: {
              format: '%Y-%m-%d',
              count : 20
          },
          label: {
            text: 'Date',
            position: 'outer-center',
          }
      },
      y : {
        label: {
           text: 'PM2.5 [micrograms/cubic metre]',
           position: 'outer-middle',
        }
      }
  },
  legend: {
    show: false
  },
  zoom: {
    enabled: true
  }
});
