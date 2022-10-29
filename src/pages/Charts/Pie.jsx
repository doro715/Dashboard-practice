import React from 'react';
import { PieSeries, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { Header } from '../../components';

class Pie extends React.PureComponent {
  render() {
    const { currentMode } = this.props;
    return (
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Pie" title="Project Cost Breakdown" />
        <AccumulationChartComponent
          id="pie-chart"
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, PieSeries, AccumulationTooltip]} />
          <AccumulationSeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              xName='x'
              yName='y'
              dataLabel={{ visible: true, name: "text", position: "Inside" }}
              innerRadius="50%"
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    )
  }
}

export default Pie;
