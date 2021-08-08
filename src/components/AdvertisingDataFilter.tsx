import { useCallback, useState } from 'react'
import Select, { OptionsType } from 'react-select'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import _ from 'lodash'

import {
  selectedAdvertisingCampaignsState,
  selectedAdvertisingDatasourcesState,
} from '../state/atoms'
import {
  availableCampaignsState,
  availableDatasourcesState,
} from '../state/selectors'

const AdvertisingDataFilter = () => {
  const availableDatasources = useRecoilValue(availableDatasourcesState)
  const availableCampaigns = useRecoilValue(availableCampaignsState)

  const setSelectedDatasources = useSetRecoilState(
    selectedAdvertisingDatasourcesState
  )
  const setSelectedCampaigns = useSetRecoilState(
    selectedAdvertisingCampaignsState
  )

  const [datasources, setDatasources] = useState<string[]>([])
  const [campaigns, setCampaigns] = useState<string[]>([])

  const handleApplyFilter = useCallback(() => {
    setSelectedDatasources(datasources)
    setSelectedCampaigns(campaigns)
  }, [datasources, campaigns, setSelectedDatasources, setSelectedCampaigns])

  const handleOnDatasourcesChange = (
    selection: OptionsType<{ value: string; label: string }>
  ) => {
    setDatasources(_.map(selection, (v) => v.value))
  }

  const handleOnCampaignsChange = (
    selection: OptionsType<{ value: string; label: string }>
  ) => {
    setCampaigns(_.map(selection, (v) => v.value))
  }

  return (
    <div>
      <Select
        options={availableDatasources}
        isMulti
        placeholder="All"
        onChange={handleOnDatasourcesChange}
      />
      <Select
        options={availableCampaigns}
        isMulti
        placeholder="All"
        onChange={handleOnCampaignsChange}
      />
      <button onClick={handleApplyFilter}>Apply</button>
    </div>
  )
}

export default AdvertisingDataFilter
