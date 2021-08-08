import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import {
  selectedAdvertisingCampaignsState,
  selectedAdvertisingDatasourcesState,
} from '../state/atoms'

const FilterInfo = () => {
  const selectedDatasources = useRecoilValue(
    selectedAdvertisingDatasourcesState
  )
  const selectedCampaigns = useRecoilValue(selectedAdvertisingCampaignsState)

  const displayText = useMemo(() => {
    const dataspurceText =
      selectedDatasources.length === 0
        ? 'All Datasources'
        : selectedDatasources.join(' and ')

    const campaignsText =
      selectedCampaigns.length === 0
        ? 'All Campaigns'
        : selectedCampaigns.join(' and ')
    return `${dataspurceText}; ${campaignsText}`
  }, [selectedDatasources, selectedCampaigns])

  return <h3>{displayText}</h3>
}

export default FilterInfo
