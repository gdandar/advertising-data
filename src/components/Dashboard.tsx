import AdvertisingDataChart from './AdvertisingDataChart'
import AdvertisingDataFilter from './AdvertisingDataFilter'
import FilterInfo from './FilterInfo'
import Container from './Container'
import Panel from './Panel'

const Dashboard = () => (
  <Container>
    <AdvertisingDataFilter />
    <Panel>
      <FilterInfo />
      <AdvertisingDataChart />
    </Panel>
  </Container>
)

export default Dashboard
