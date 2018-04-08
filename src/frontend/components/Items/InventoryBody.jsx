import React from 'react'
import { Icon, Table, Image, Popup } from 'semantic-ui-react'
import { isAcceptedKey } from '../../inventoryActions'
import { getDocument, deleteDocument } from '../../firestoreActions'
import { getDocumentUID, addToDb } from '../../firestoreActions'
import { loadImage } from '../../documentHandler'
import { storage } from '../../../backend/database'
import Mail from '../../../backend/containers/mailContainer'
import swal from 'sweetalert'

class InventoryBody extends React.Component {
  getRowSubContents (key, count, num) {
    const { peopleModals, cars } = this.props
    const obj = cars[num][key]
    if (isAcceptedKey(key)) {
      return(<Table.Cell key={count}>{obj}</Table.Cell>)
    } else if (key === 'peopleInterested') {
      if (obj.length === 0) {
        return(<Table.Cell key={count}>None</Table.Cell>)
      } else {
        let message = 'people interested'
        if (obj.length === 1) {
          message = 'person interested'
        }
        if (peopleModals) {
          return(
            <Table.Cell key={count}>
              <Mail id={num} obj={obj} arrayId={cars[num]['arrayId']} message={message}/>
            </Table.Cell>
          )
        }
      }
    }
  }

  getRowContents (num) {
    const { cars } = this.props
    if (cars && cars.length > 0) {
      const toRender = []
      let count = 0
      const imageKey = `${count}${cars[num]['ImageId']}`
      const child = `${cars[num]['ImageId']}`
      toRender.push(<Table.Cell key={count++}><Image id={imageKey} rounded size='small' src={loadImage(imageKey, child)}/></Table.Cell>)
      for (const key in cars[num]) {
        const obj = cars[num][key]
        if (obj === true) {
          toRender.push(<Table.Cell key={count++}><Icon color='green' name='checkmark' size='large' /></Table.Cell>)
        } else if (obj === false) {
          toRender.push(
            <Table.Cell key={count++}>
              <Popup trigger={<Icon color='red' name='close' size='large'
                onClick={() => this.onClickHandler(cars[num]['ImageId'], cars[num]['Id'], cars[num])}/>}
                content='**Click on this icon to cancel advertisment'/>
            </Table.Cell>
          )
        } else {
          toRender.push(this.getRowSubContents(key, count, num))
          count++
        }
      }
      return toRender
    }
  }

  getBodyContents () {
    const { cars } = this.props
    if (cars && cars.length > 0) {
      const toRender = []
      let count = 0
      for (let i = 0; i < cars.length; i++) {
        toRender.push(<Table.Row key={i}>{this.getRowContents(i)}</Table.Row>)
      }
      return toRender
    }
    return <Table.Row/>
  }

  async onClickHandler (imageId, id, obj) {
    const { getCarsAdvertised } = this.props
    const option = swal(
      "Warning!",
      "You will be charged a 2% cancellation fee if you wish to continue",
      "warning"
    )
    if (await option) {
      const confirmation = swal("Advertisment has been cancelled!", {
        icon: "success"
      })
      if (await confirmation) {
        const userUID = JSON.parse(localStorage.getItem('user')).uid
        await deleteDocument('cars', id)
        await storage.ref().child(`cars/${imageId}`).delete()
        await getCarsAdvertised(userUID)
        const user = await getDocumentUID('users', userUID)
        const userData = user.data()
        const transaction = { // To prevent them from having a transaction in real life and then just cancelling for free advertisment
          ...userData,
          fee: parseInt(obj.Price.slice(1)) * 0.02,
          transactionDate: new Date(),
          status: 'cancelled'
        }
        addToDb('transactions', transaction)
      }
    }
  }

  render () {
    return (
      this.getBodyContents()
    )
  }
}

export default InventoryBody
