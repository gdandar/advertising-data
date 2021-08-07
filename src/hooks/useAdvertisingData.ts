import { AdvertisingData } from '../models/advertisingData'

interface UseAdvertisingDataProps {
  advertisingData: AdvertisingData[]
}

const useAdvertisingData = (): UseAdvertisingDataProps => {
  return {
    advertisingData: [],
  }
}

export default useAdvertisingData
