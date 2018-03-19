import React from 'react'
import { Button, Divider, Grid, Container } from 'semantic-ui-react'
import RentBar from './RentBar'
import InfiniteCalendar, { withRange, Calendar } from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

class LocationDate extends React.Component {
  render () {
    const date = new Date()
    return (
      <Container fluid style={{ paddingTop: 50 }}>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column/>
            <Grid.Column>
              <InfiniteCalendar
                Component={withRange(Calendar)} min={date} max={new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())}
                selected={{ start: date, end: date }} width={'200%'} onSelect={(selectedDate) => console.log(selectedDate.start, ' ', selectedDate.end)}/>
              <Button style={{width: '200%'}}fluid>Confirm Date</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default LocationDate
