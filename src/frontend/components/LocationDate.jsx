import React from 'react'
import { Button, Divider, Grid, Container } from 'semantic-ui-react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

class LocationDate extends React.Component {
  setDate (date) {
    this.date = date
  }

  onClickHandler () {
    const date = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`
    const { setTransactionInfo } = this.props
    setTransactionInfo({
      date: date,
      activeItem: 'confirmation'
    })
  }

  render () {
    console.log(this.props)
    const date = new Date()
    this.date = date
    return (
      <Container fluid style={{paddingTop: 20}}>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '80%' }}>
            <InfiniteCalendar
              minDate={date} maxDate={new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())}
              selected={date} width={'100%'}
              onSelect={(selectedDate) => {
                this.setDate(selectedDate)
              }}/>
            <Button style={{width: '100%'}} fluid onClick={() => this.onClickHandler()}>Confirm Date</Button>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default LocationDate
