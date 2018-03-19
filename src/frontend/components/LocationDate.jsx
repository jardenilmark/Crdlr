import React from 'react'
import { Button, Divider, Grid, Container } from 'semantic-ui-react'
import InfiniteCalendar, { withRange, Calendar } from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

class LocationDate extends React.Component {
  setDateStart (date) {
    this.dateStart = date
  }
  setDateEnd (date) {
    this.dateEnd = date
  }
  onClickHandler () {
    const { setTransactionInfo } = this.props
    setTransactionInfo({
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
      activeItem: 'confirmation'
    })
  }
  render () {
    const date = new Date()
    this.dateStart = date
    this.dateEnd = date
    return (
      <Container fluid style={{paddingTop: 20}}>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '80%' }}>
            <InfiniteCalendar
              Component={withRange(Calendar)} minDate={date} maxDate={new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())}
              selected={{ start: date, end: date }} width={'100%'}
              onSelect={(selectedDate) => {
                this.setDateStart(selectedDate.start)
                this.setDateEnd(selectedDate.end)
              }}/>
            <Button style={{width: '100%'}} fluid onClick={() => this.onClickHandler()}>Confirm Date</Button>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default LocationDate
