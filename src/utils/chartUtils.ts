import { LineSeriesPoint } from 'react-vis'

import { AdvertisingData } from '../models/advertisingData'

interface ChartData {
  /** Line series points for displaying the number of clicks */
  clicksData: LineSeriesPoint[]
  /** Line series points for displaying the number of impressions */
  impressionsData: LineSeriesPoint[]
  /** The series start date */
  startDate: number
  /** Scale multiplier required to display clicks and impressions on the same chart */
  clicksYScale: number
}

/**
 * Converts the given advertisement data to a format that can be used for visualisation
 * @param advertisingData Array of advertisement data to convert
 * @returns
 */
export function convertToChartData(
  advertisingData: AdvertisingData[]
): ChartData {
  const clicks: Record<string, { x: number; y: number }> = {}
  const impressions: Record<string, { x: number; y: number }> = {}

  let minDate = -1
  let maxClicks = 0
  let maxImpressions = 0

  advertisingData.forEach((data) => {
    if (impressions[data.date] || clicks[data.date]) {
      impressions[data.date].y += data.impressions
      clicks[data.date].y += data.clicks
    } else {
      // Convert the date value from string DD.MM.YYYY to millisecs
      const dateValues = data.date.split('.')
      const date = Date.parse(
        `${dateValues[1]}/${dateValues[0]}/${dateValues[2]}`
      )

      impressions[data.date] = {
        x: date,
        y: data.impressions,
      }

      clicks[data.date] = {
        x: date,
        y: data.clicks,
      }

      // set minimum date
      if (minDate === -1 || date < minDate) {
        minDate = date
      }
    }

    // store the max values for clicks and impressions to set the scale for the corresponding line series later
    if (maxClicks < clicks[data.date].y) {
      maxClicks = clicks[data.date].y
    }

    if (maxImpressions < impressions[data.date].y) {
      maxImpressions = impressions[data.date].y
    }
  })

  const impressionsData = Object.keys(impressions).map(
    (key) => impressions[key]
  )
  const clicksData = Object.keys(clicks).map((key) => clicks[key])

  return {
    clicksData,
    impressionsData,
    startDate: minDate,
    clicksYScale: maxImpressions === 0 ? 1 : maxClicks / maxImpressions,
  }
}
