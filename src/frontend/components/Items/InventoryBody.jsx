import React from 'react'
import { Icon, Table, Image, Popup } from 'semantic-ui-react'
import { isAcceptedKey } from '../../inventoryActions'
import { deleteDocument, getDocumentUID, addToDb } from '../../firestoreActions'
import { loadImage, getDate } from '../../documentHandler'
import { storage } from '../../../backend/database'
import Mail from '../../../backend/containers/MailContainer'
import swal from 'sweetalert'

class InventoryBody extends React.Component {
  getRowSubContents (key, count, num) {
    const { peopleModals, cars } = this.props
    const obj = cars[num][key]
    if (isAcceptedKey(key)) {
      return (<Table.Cell key={count}>{obj}</Table.Cell>)
    }
    if (key === 'peopleInterested') {
      if (cars[num]['Sold']) {
        return (
          <Table.Cell key={count}>
            N/A
          </Table.Cell>
        )
      } else if (obj.length === 0) {
        return (
          <Table.Cell key={count}>
            None
          </Table.Cell>
        )
      } else if (obj.length === 1 && peopleModals.length > 0) {
        return (
          <Table.Cell key={count}>
            <Mail id={num} obj={obj} arrayId={cars[num]['arrayId']} message={'person interested'}/>
          </Table.Cell>
        )
      } else if (obj.length > 1 && peopleModals.length > 0) {
        return (
          <Table.Cell key={count}>
            <Mail id={num} obj={obj} arrayId={cars[num]['arrayId']} message={'people interested'}/>
          </Table.Cell>
        )
      }
    }
  }

  getRowContents (num) {
    let count = 0
    const { cars } = this.props
    const toRender = []
    const imageKey = `${count}${cars[num]['ImageId']}`
    const child = `${cars[num]['ImageId']}`
    toRender.push(
      <Table.Cell key={count++}>
        <Image id={imageKey} rounded size='small' src={loadImage(imageKey, child)}/>
      </Table.Cell>
    )
    for (const key in cars[num]) {
      const obj = cars[num][key]
      if (obj === true) {
        toRender.push(
          <Table.Cell key={count++}>
            <Icon color='green' name='checkmark' size='large' />
          </Table.Cell>
        )
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

  getEmptyRows (size, count) {
    const { propertyArray } = this.props
    const emptyRows = []
    for (let i = 0; i < size; i++) {
      emptyRows.push(
        <Table.Row key={count++}>{/* used count to prevent duplicate map keys */}
          <Table.Cell>
            <Image rounded size='small' src={require('../../../../public/images/blank.jpg')}/>
          </Table.Cell>
          {propertyArray.map(e => {
            return (<Table.Cell key={count++}/>)
          })}
        </Table.Row>
      )
    }
    return emptyRows
  }

  getBodyContents () {
    const { cars } = this.props
    const arr = []
    const minSize = 8
    let count = 0
    cars.forEach(e => {
      arr.push(
        <Table.Row key={count}>
          {this.getRowContents(count++)}
        </Table.Row>
      )
    })
    const emptyCells = this.getEmptyRows(minSize - cars.length, count)
    const toRender = [...arr, ...emptyCells]
    return toRender
  }

  async onClickHandler (imageId, id, obj) {
    const { getCarsAdvertised } = this.props
    const option = swal(
      'Warning!',
      'You will be charged a 2% cancellation fee if you wish to continue',
      'warning'
    )
    if (await option) {
      const confirmation = swal('Advertisment has been cancelled!', {
        icon: 'success'
      })
      if (await confirmation) {
        const userUID = JSON.parse(localStorage.getItem('user')).uid
        await deleteDocument('contacts', obj.arrayId)
        await deleteDocument('cars', id)
        await storage.ref().child(`cars/${imageId}`).delete()
        await getCarsAdvertised(userUID)
        const user = await getDocumentUID('users', userUID)
        const userData = user.data()
        const transaction = { // To prevent them from having a transaction in real life and then just cancelling for free advertisment
          ...userData,
          fee: parseInt(obj.Price.slice(1)) * 0.02,
          transactionDate: getDate(new Date()),
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
