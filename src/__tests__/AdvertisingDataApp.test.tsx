import { fireEvent, render, screen } from '@testing-library/react'
import selectEvent from 'react-select-event'
import { advertisingDataCsv } from '../__mockData__/advertisingData'
import AdvertisingDataApp from '../AdvertisingDataApp'

beforeEach(async () => {
  fetchMock.resetMocks()
})

test('renders the chart correctly and the default filter info text when no datasources or campaigns are selected', async () => {
  // Mock the server response
  fetchMock.mockResponseOnce(advertisingDataCsv)

  // Render the app
  const { container } = render(<AdvertisingDataApp />)
  const filterInfoText = await screen.findByText(
    /All Datasources; All Campaigns/i
  )

  // check if the filter info text is correct
  expect(filterInfoText).toBeInTheDocument()

  // check if the chart matches the snapshot
  expect(container.querySelector('.rv-xy-plot')).toMatchSnapshot()
})

test('renders the chart correctly and the name of the selected datasources and campaigns after selection', async () => {
  // Mock the server response
  fetchMock.mockResponseOnce(advertisingDataCsv)

  const selectedDatasources = ['Datasource 1', 'Datasource 2']
  const selectedDCampaigns = ['Campaign 2', 'Campaign 3']

  // Render the app
  const { container } = render(<AdvertisingDataApp />)

  // Select datasources
  await selectEvent.select(
    await screen.findByLabelText('Datasources'),
    selectedDatasources
  )

  // Select campaigns
  await selectEvent.select(
    await screen.findByLabelText('Campaigns'),
    selectedDCampaigns
  )

  // Hit submit
  fireEvent.submit(screen.getByRole('button'))

  const filterInfoText = await screen.findByText(
    `${selectedDatasources.join(' and ')}; ${selectedDCampaigns.join(' and ')}`
  )

  // Check if the filter info text is correct
  expect(filterInfoText).toBeInTheDocument()

  // Check if the chart matches the snapshot
  expect(container.querySelector('.rv-xy-plot')).toMatchSnapshot()
})
