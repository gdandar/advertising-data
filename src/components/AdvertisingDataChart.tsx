import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  MarkSeries,
} from 'react-vis'
import { useRecoilValue } from 'recoil'

import { advertisingDataChartState } from '../state/selectors'

const AdvertisingDataChart = () => {
  const chartData = useRecoilValue(advertisingDataChartState)

  if (!chartData) {
    return null
  }

  return (
    <div>
      <XYPlot
        height={300}
        width={900}
        xType="time"
        margin={{ top: 40, right: 60, left: 50, bottom: 50 }}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickTotal={10} />
        <YAxis
          title="Clicks"
          tickFormat={(tick) => `${Math.floor(tick * chartData.clicksYScale)}`}
        />
        <YAxis
          title="Impressions"
          orientation="right"
          tickFormat={(tick) => `${Math.floor(tick / 1000)}k`}
        />
        {/* Adding a hidden MarkSeries to make the y axis tick start from 0 */}
        <MarkSeries
          data={[{ x: chartData.startDate, y: 0 }]}
          style={{ display: 'none' }}
        />
        <LineSeries
          data={chartData.clicksData}
          color="green"
          fill={0}
          getY={(d) => d.y / chartData.clicksYScale}
        />
        <LineSeries data={chartData.impressionsData} color="blue" fill={0} />
      </XYPlot>
    </div>
  )
}

export default AdvertisingDataChart
