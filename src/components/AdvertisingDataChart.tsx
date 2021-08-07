import advertisingDataMock from '../mocks/advertisingData'

import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  MarkSeries,
  LineSeriesPoint,
} from 'react-vis'

const clicksData: LineSeriesPoint[] = []
const impressionsData: LineSeriesPoint[] = []
let minDate = -1
let maxClicks = 0
let maxImpressions = 0

advertisingDataMock.forEach((data) => {
  const date = new Date(data.date).getTime()

  clicksData.push({
    x: date,
    y: data.clicks,
  })

  impressionsData.push({
    x: date,
    y: data.impressions,
  })

  // set minimum date
  if (minDate === -1 || date < minDate) {
    minDate = date
  }

  // store the max values for clicks and impressions to set the scale for the corresponding line series later
  if (maxClicks < data.clicks) {
    maxClicks = data.clicks
  }

  if (maxImpressions < data.impressions) {
    maxImpressions = data.impressions
  }
})

const scaleMultiplier = maxClicks / maxImpressions

const AdvertisingDataChart = () => {
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
          tickFormat={(tick) => `${Math.floor(tick * scaleMultiplier)}`}
        />
        <YAxis
          title="Impressions"
          orientation="right"
          tickFormat={(tick) => `${Math.floor(tick / 1000)}k`}
        />
        {/* Adding a hidden MarkSeries to make the y axis tick start from 0 */}
        <MarkSeries data={[{ x: minDate, y: 0 }]} style={{ display: 'none' }} />
        <LineSeries
          data={clicksData}
          color="green"
          fill={0}
          getY={(d) => d.y / scaleMultiplier}
        />
        <LineSeries data={impressionsData} color="blue" fill={0} />
      </XYPlot>
    </div>
  )
}

export default AdvertisingDataChart
