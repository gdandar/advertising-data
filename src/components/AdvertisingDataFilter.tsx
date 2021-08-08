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
import Panel from './Panel'

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
    <Panel blue>
      <h3>Filter Dimension Values</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '5fr 1fr',
          gridColumnGap: '6px',
        }}
      >
        <div style={{ display: 'grid' }}>
          <div>
            <label>Datasources</label>
            <Select
              options={availableDatasources}
              isMulti
              placeholder="All"
              onChange={handleOnDatasourcesChange}
            />
          </div>
          <div>
            <label>Campaigns</label>
            <Select
              options={availableCampaigns}
              isMulti
              placeholder="All"
              onChange={handleOnCampaignsChange}
            />
          </div>
        </div>
        <button onClick={handleApplyFilter} style={{ alignSelf: 'end' }}>
          Apply
        </button>
      </div>
    </Panel>
  )
}

export default AdvertisingDataFilter
