import { selector } from 'recoil'

import { convertToChartData } from '../utils/chartUtils'
import { getAdvertisingDataFromCsv } from '../utils/csvUtils'
import { advertisngDataSourceState } from './atoms'

export const advertisingDataState = selector({
  key: 'AdvertisingData',
  get: async ({ get }) => {
    const response = await fetch(get(advertisngDataSourceState))
    if (response.ok) {
      return getAdvertisingDataFromCsv(await response.text())
    }
  },
})

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
