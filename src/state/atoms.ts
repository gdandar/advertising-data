import { atom } from 'recoil'

/** Stores the url of the csv datasource */
export const advertisngDataSourceState = atom({
  key: 'AdvertisingDataSource',
  default:
    'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv',
})

/** Stores the datasource names selected by the user */
export const selectedAdvertisingDatasourcesState = atom({
  key: 'SelectedAdvertisingDatasources',
  default: [],
})

/** Stores the campaign names selected by the user */
export const selectedAdvertisingCampaignsState = atom({
  key: 'SelectedAdvertisingCampaigns',
  default: [],
})
