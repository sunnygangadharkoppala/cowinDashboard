/* eslint-disable camelcase */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

class CowinDashboard extends Component {
  state = {loading: true, dataList: {}}

  componentDidMount() {
    this.getInformation()
  }

  getInformation = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {method: 'get'}
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({dataList: data, loading: false})
    } else {
      this.setState({loading: false})
      return (
        <div className="failureContainer">
          <img
            className="failureImg"
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
          <h1>Something went wrong</h1>
        </div>
      )
    }
    return 'hi'
  }

  bringRemainingComponents = () => {
    const {dataList} = this.state
    const {
      last_7_days_vaccination,
      vaccination_by_age,
      vaccination_by_gender,
    } = dataList
    return (
      <>
        <VaccinationCoverage
          last_7_days_vaccination={last_7_days_vaccination}
        />
        <VaccinationByGender vaccination_by_gender={vaccination_by_gender} />
        <VaccinationByAge vaccination_by_age={vaccination_by_age} />
      </>
    )
  }

  render() {
    const {loading} = this.state
    return (
      <div className="cowinContainer">
        <div className="logoContainer">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <p className="logoText">Co-WIN</p>
        </div>
        <h1 className="appHeading">CoWIN Vaccination in India</h1>
        {loading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.bringRemainingComponents()
        )}
      </div>
    )
  }
}

export default CowinDashboard
