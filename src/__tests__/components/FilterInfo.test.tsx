import { screen } from '@testing-library/react'
import { render } from '../../utils/testUtils'
import FilterInfo from '../../components/FilterInfo'
import {
  selectedAdvertisingCampaignsState,
  selectedAdvertisingDatasourcesState,
} from '../../state/atoms'

test('renders default text when no datasources or campaigns are selected', () => {
  render(<FilterInfo />)
  const titleElement = screen.getByText(/All Datasources; All Campaigns/i)
  expect(titleElement).toBeInTheDocument()
})

test('renders the name of the selected datasources and campaigns', () => {
  const selectedDatasources = ['Test Datasource 1', 'Test Datasource 2']
  const selectedDCampaigns = ['Test Campaign 1', 'Test Campaign 2']

  render(<FilterInfo />, ({ set }) => {
    set(selectedAdvertisingDatasourcesState, selectedDatasources)
    set(selectedAdvertisingCampaignsState, selectedDCampaigns)
  })

  const titleElement = screen.getByText(
    `${selectedDatasources.join(' and ')}; ${selectedDCampaigns.join(' and ')}`
  )

  expect(titleElement).toBeInTheDocument()
})
