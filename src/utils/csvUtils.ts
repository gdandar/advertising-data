import { AdvertisingData } from '../models/advertisingData'

export function getAdvertisingDataFromCsv(csv: string): AdvertisingData[] {
  const lines = csv.split('\n')

  const result = []

  const headers = lines[0].split(',')

  for (var i = 1; i < lines.length; i++) {
    const obj: Record<string, any> = {}
    const currentline = lines[i].split(',')

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j].toLowerCase()] = ['Clicks', 'Impressions'].includes(
        headers[j]
      )
        ? parseInt(currentline[j]) || 0
        : currentline[j]
    }

    result.push(obj)
  }

  return result as AdvertisingData[]
}
