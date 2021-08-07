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
import {
  advertisingDataChartState,
  advertisingDataState,
} from '../state/selectors'

const AdvertisingDataChart = () => {
  const chartData = useRecoilValue(advertisingDataChartState)
  const advData = useRecoilValue(advertisingDataState)

  if (!chartData) {
    return null
  }

  console.log(chartData)

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
          tickFormat={(tick) =>
            `${Math.floor(tick * chartData.scaleMultiplier)}`
          }
        />
        <YAxis
          title="Impressions"
          orientation="right"
          tickFormat={(tick) => `${Math.floor(tick / 1000)}k`}
        />
        {/* Adding a hidden MarkSeries to make the y axis tick start from 0 */}
        <MarkSeries
          data={[{ x: chartData.minDate, y: 0 }]}
          style={{ display: 'none' }}
        />
        <LineSeries
          data={chartData.clicksData}
          color="green"
          fill={0}
          getY={(d) => d.y / chartData.scaleMultiplier}
        />
        <LineSeries data={chartData.impressionsData} color="blue" fill={0} />
      </XYPlot>
    </div>
  )
}

export default AdvertisingDataChart
