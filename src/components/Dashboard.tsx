import AdvertisingDataChart from './AdvertisingDataChart'
import AdvertisingDataFilter from './AdvertisingDataFilter'
import FilterInfo from './FilterInfo'

const Dashboard = () => (
  <div>
    <AdvertisingDataFilter />
    <FilterInfo />
    <AdvertisingDataChart />
  </div>
)

export default Dashboard
