# ApexCharts.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

ApexCharts is a modern JavaScript charting library that allows you to build interactive data visualizations with simple API and 100+ ready-to-use samples. Packed with the features that you expect, ApexCharts includes over a dozen chart types that deliver beautiful, responsive visualizations in your apps and dashboards. ApexCharts is an MIT-licensed open-source project that can be used in commercial and non-commercial projects.

## Demo

[View Demo](https://apexcharts.com/javascript-chart-demos/)

## Features

- Over a dozen chart types including line, area, bar, column, pie, donut, scatter, bubble, heatmap, treemap, and more
- Highly customizable with 100+ options to configure the appearance and behavior
- Responsive and mobile-friendly
- Supports time-series data, category data, and custom x-axis labels
- Interactive features like zooming, panning, and tooltips
- Supports Datetime, Numeric, and Category x-axis types
- Supports both single and multiple y-axes
- Supports stacked and grouped charts
- Supports annotations, range, and area charts
- Advanced data labels with custom formatters
- Easy integration with popular frameworks like Vue, React, Angular, and Stencil

## Requirements

ApexCharts has no external dependencies and can be used in any JavaScript project.

## Usage

To create a basic bar chart with minimal configuration, write as follows:

```js
import ApexCharts from 'https://code4fukui.github.io/apexcharts.js/ApexCharts.js';

const options = {
  chart: {
    type: 'bar'
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
};

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
```

## License

MIT License — see [LICENSE](LICENSE).