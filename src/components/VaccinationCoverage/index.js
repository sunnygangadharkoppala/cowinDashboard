/* eslint-disable camelcase */
import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {last_7_days_vaccination} = props
  const DataFormatter = number => `${(number / 1000).toString()}k`
  return (
    <div className="vaccinationCoverageContainer">
      <h1 className="vaccinationCoverageHeading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={last_7_days_vaccination} margin={{top: 5}}>
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'grey',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: 'grey', strokeWidth: 0}}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="dose_1" name="Dose1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose_2" name="Dose2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
