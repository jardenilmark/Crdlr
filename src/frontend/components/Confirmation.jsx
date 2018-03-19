import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

class Confirmation extends React.Component {
  render () {
    console.log(this.props)
    return (
      <Container fluid style={{paddingTop: 20}}>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '80%' }}>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Confirmation
