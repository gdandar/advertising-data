import { AdvertisingData } from '../models/advertisingData'

export const advertisingDataCsv = `Date,Datasource,Campaign,Clicks,Impressions
01.01.2019,Datasource 1,Campaign 1,250,1829
02.01.2019,Datasource 1,Campaign 1,362,1186
03.01.2019,Datasource 1,Campaign 1,274,1796
04.01.2019,Datasource 1,Campaign 1,379,1036
05.01.2019,Datasource 1,Campaign 1,205,1133
01.01.2019,Datasource 1,Campaign 2,347,1186
02.01.2019,Datasource 1,Campaign 2,323,1872
03.01.2019,Datasource 1,Campaign 2,332,1431
04.01.2019,Datasource 1,Campaign 2,393,1721
05.01.2019,Datasource 1,Campaign 2,338,1113
01.01.2019,Datasource 2,Campaign 3,306,1670
02.01.2019,Datasource 2,Campaign 3,313,1331
03.01.2019,Datasource 2,Campaign 3,345,1877
04.01.2019,Datasource 2,Campaign 3,387,1916
05.01.2019,Datasource 2,Campaign 3,263,1302
01.01.2019,Datasource 2,Campaign 4,244,
02.01.2019,Datasource 2,Campaign 4,330,
03.01.2019,Datasource 2,Campaign 4,390,
04.01.2019,Datasource 2,Campaign 4,249,
05.01.2019,Datasource 2,Campaign 4,236,

`

export const advertisingData: AdvertisingData[] = [
  {
    date: '01.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 1',
    clicks: 250,
    impressions: 1829,
  },
  {
    date: '02.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 1',
    clicks: 362,
    impressions: 1186,
  },
  {
    date: '03.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 1',
    clicks: 274,
    impressions: 1796,
  },
  {
    date: '04.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 1',
    clicks: 379,
    impressions: 1036,
  },
  {
    date: '05.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 1',
    clicks: 205,
    impressions: 1133,
  },
  {
    date: '01.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 2',
    clicks: 347,
    impressions: 1186,
  },
  {
    date: '02.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 2',
    clicks: 323,
    impressions: 1872,
  },
  {
    date: '03.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 2',
    clicks: 332,
    impressions: 1431,
  },
  {
    date: '04.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 2',
    clicks: 393,
    impressions: 1721,
  },
  {
    date: '05.01.2019',
    datasource: 'Datasource 1',
    campaign: 'Campaign 2',
    clicks: 338,
    impressions: 1113,
  },
  {
    date: '01.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 3',
    clicks: 306,
    impressions: 1670,
  },
  {
    date: '02.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 3',
    clicks: 313,
    impressions: 1331,
  },
  {
    date: '03.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 3',
    clicks: 345,
    impressions: 1877,
  },
  {
    date: '04.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 3',
    clicks: 387,
    impressions: 1916,
  },
  {
    date: '05.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 3',
    clicks: 263,
    impressions: 1302,
  },
  {
    date: '01.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 4',
    clicks: 244,
    impressions: 0,
  },
  {
    date: '02.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 4',
    clicks: 330,
    impressions: 0,
  },
  {
    date: '03.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 4',
    clicks: 390,
    impressions: 0,
  },
  {
    date: '04.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 4',
    clicks: 249,
    impressions: 0,
  },
  {
    date: '05.01.2019',
    datasource: 'Datasource 2',
    campaign: 'Campaign 4',
    clicks: 236,
    impressions: 0,
  },
]
