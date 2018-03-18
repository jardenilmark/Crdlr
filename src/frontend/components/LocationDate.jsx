import React from 'react'
import { Divider, Grid, Container } from 'semantic-ui-react'
import RentBar from './RentBar'
import InfiniteCalendar, { withRange, Calendar } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'

class LocationDate extends React.Component {
  render () {
    console.log(InfiniteCalendar)
    return (
      <Container fluid>
        <Grid columns='equal' divided style={{ paddingTop: 50 }}>
          <Grid.Row>
            <Grid.Column/>
            <Grid.Column>
            <InfiniteCalendar Component={withRange(Calendar)} selected={{
                    start: new Date(2017, 1, 10),
                    end: new Date(2017, 1, 18),
                  }} onSelect={(e, {selected}) => console.log(selected)}
                />
            </Grid.Column>
            <Grid.Column/>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default LocationDate
