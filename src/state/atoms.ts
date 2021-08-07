import { atom } from 'recoil'

export const advertisngDataSourceState = atom({
  key: 'AdvertisingDataSource',
  default:
    'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv',
})

export const selectedAdvertisingDatasourcesState = atom({
  key: 'SelectedAdvertisingDatasources',
  default: [],
})

export const selectedAdvertisingCampaignsState = atom({
  key: 'SelectedAdvertisingCampaigns',
  default: [],
})
