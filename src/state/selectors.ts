import { selector } from 'recoil'

import { convertToChartData } from '../utils/chartUtils'
import { getAdvertisingDataFromCsv } from '../utils/csvUtils'
import { advertisngDataSourceState } from './atoms'

/** Stores all advertising data as an array of AdvertisingData */
export const advertisingDataState = selector({
  key: 'AdvertisingData',
  get: async ({ get }) => {
    const response = await fetch(get(advertisngDataSourceState))
    if (response.ok) {
      return getAdvertisingDataFromCsv(await response.text())
    }
  },
})

/** Stores the advertising data in a format that can be used to visualize its */
export const advertisingDataChartState = selector({
  key: 'AdvertisingDataChart',
  get: ({ get }) => {
    const data = get(advertisingDataState)
    if (!data) {
      return null
    }
    return convertToChartData(data)
  },
})
