import { selector } from 'recoil'
import _ from 'lodash'

import { convertToChartData } from '../utils/chartUtils'
import { getAdvertisingDataFromCsv } from '../utils/csvUtils'
import {
  advertisngDataSourceState,
  selectedAdvertisingCampaignsState,
  selectedAdvertisingDatasourcesState,
} from './atoms'

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

/** Stores advertising data filtered by the selected datasources and campaigns */
export const filteredAdvertisingDataState = selector({
  key: 'FilteredAdvertisingData',
  get: async ({ get }) => {
    const data = get(advertisingDataState)
    const datasources = get(selectedAdvertisingDatasourcesState)
    const campaigns = get(selectedAdvertisingCampaignsState)

    return _.filter(data, (d) => {
      const datasourceMatches =
        datasources.length === 0 || datasources.includes(d.datasource)
      const campaignMatches =
        campaigns.length === 0 || campaigns.includes(d.campaign)
      return datasourceMatches && campaignMatches
    })
  },
})

/** Stores the advertising data in a format that can be used to visualize its */
export const advertisingDataChartState = selector({
  key: 'AdvertisingDataChart',
  get: ({ get }) => {
    const data = get(filteredAdvertisingDataState)
    if (!data) {
      return null
    }
    return convertToChartData(data)
  },
})

/** stores the names of the available datasources */
export const availableDatasourcesState = selector({
  key: 'AvailableDatasources',
  get: ({ get }) => {
    const data = get(advertisingDataState)
    if (!data) {
      return []
    }

    return _(Object.keys(_.groupBy(data, (d) => d.datasource)))
      .filter((k) => !!k)
      .map((key) => ({
        value: key,
        label: key,
      }))
      .value()
  },
})

/** stores the names of tha available campaigns */
export const availableCampaignsState = selector({
  key: 'AvailableCampaigns',
  get: ({ get }) => {
    const data = get(advertisingDataState)
    if (!data) {
      return []
    }

    return _(Object.keys(_.groupBy(data, (d) => d.campaign)))
      .filter((k) => !!k)
      .map((key) => ({
        value: key,
        label: key,
      }))
      .value()
  },
})
