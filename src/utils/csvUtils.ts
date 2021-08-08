import { AdvertisingData } from '../models/advertisingData'
/**
 * Converts a csv string into an AdvertisingData array
 * @param csv The string that containns the csv data
 * @returns The data from the csv as an array of AdvertisingData
 */
export function getAdvertisingDataFromCsv(csv: string): AdvertisingData[] {
  const lines = csv.split('\n')

  const result = []

  const headers = lines[0].split(',')

  for (var i = 1; i < lines.length; i++) {
    // do not parse empty lines
    if (lines[i].length === 0) {
      continue
    }

    const obj: Record<string, any> = {}
    const currentline = lines[i].split(',')

    for (var j = 0; j < headers.length; j++) {
      const header = headers[j].toLowerCase()
      if (['clicks', 'impressions'].includes(header)) {
        // parse clicks and impressions as integers
        obj[header] = parseInt(currentline[j]) || 0
      } else {
        obj[header] = currentline[j]
      }
    }

    result.push(obj)
  }

  return result as AdvertisingData[]
}
