import { AdvertisingData } from '../models/advertisingData'

/**
 * Converts the given advertisement data to a format that can be used for visualisation
 * @param data Array of advertisement data to convert
 * @returns
 */
export function convertToChartData(data: AdvertisingData[]) {
  const clicks: Record<string, { x: number; y: number }> = {}
  const impressions: Record<string, { x: number; y: number }> = {}

  let minDate = -1
  let maxClicks = 0
  let maxImpressions = 0

  data.forEach((data) => {
    if (impressions[data.date] || clicks[data.date]) {
      impressions[data.date].y += data.impressions
      clicks[data.date].y += data.clicks
    } else {
      const dateValues = data.date.split('.')
      const date = new Date(
        `${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`
      ).getTime()

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
    if (maxClicks < data.clicks) {
      maxClicks = data.clicks
    }

    if (maxImpressions < data.impressions) {
      maxImpressions = data.impressions
    }
  })

  const impressionsData = Object.keys(impressions).map(
    (key) => impressions[key]
  )
  const clicksData = Object.keys(clicks).map((key) => clicks[key])

  return {
    clicksData,
    impressionsData,
    minDate,
    scaleMultiplier: maxClicks / maxImpressions,
  }
}
