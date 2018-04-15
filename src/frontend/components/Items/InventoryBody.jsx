import React from 'react'
import { Icon, Table, Image, Popup } from 'semantic-ui-react'
import { isAcceptedKey } from '../../inventoryActions'
import { deleteDocument, getDocumentUID, addToDb } from '../../../backend/data'
import { loadImage, getDate } from '../../documentHandler'
import { storage } from '../../../backend/database'
import Receipt from '../../../backend/containers/SellerReceiptContainer'
import Mail from '../../../backend/containers/MailContainer'
import swal from 'sweetalert'

class InventoryBody extends React.Component {
  getRowSubContents (key, num) {
    const { peopleModals, cars } = this.props
    const obj = cars[num][key]
    if (isAcceptedKey(key)) {
      return (<Table.Cell key={this.keyCount++}>{obj}</Table.Cell>)
    }
    if (key === 'peopleInterested') {
      if (cars[num]['sold']) {
        return (
          <Table.Cell key={this.keyCount++}>
            N/A
          </Table.Cell>
        )
      } else if (obj.length === 0) {
        return (
          <Table.Cell key={this.keyCount++}>
            None
          </Table.Cell>
        )
      } else if (obj.length === 1 && peopleModals.length > 0) {
        return (
          <Table.Cell key={this.keyCount++}>
            <Mail id={num} obj={obj} arrayId={cars[num]['arrayId']} message={'person interested'}/>
          </Table.Cell>
        )
      } else if (obj.length > 1 && peopleModals.length > 0) {
        return (
          <Table.Cell key={this.keyCount++}>
            <Mail id={num} obj={obj} arrayId={cars[num]['arrayId']} message={'people interested'}/>
          </Table.Cell>
        )
      }
    }
  }

  getRowContents (num) {
    const { cars, receiptModals } = this.props
    const toRender = []
    const imageKey = `${cars[num]['imageId']}`
    toRender.push(
      <Table.Cell key={this.keyCount++}>
        <Image id={imageKey} rounded size='small' src={loadImage(imageKey)}/>
      </Table.Cell>
    )
    for (const key in cars[num]) {
      const obj = cars[num][key]
      if (obj === true) {
        toRender.push(
          <Table.Cell key={this.keyCount++}>
            <Icon color='green' name='checkmark' size='large' />
          </Table.Cell>
        )
      } else if (obj === false) {
        toRender.push(
          <Table.Cell key={this.keyCount++}>
            <Popup trigger={<Icon color='red' name='close' size='large'
              onClick={() => this.onClickHandler(cars[num]['imageId'], cars[num])}/>}
            content='**Click on this icon to cancel advertisment'/>
          </Table.Cell>
        )
      } else {
        toRender.push(this.getRowSubContents(key, num))
      }
    }
    if (cars[num]['sold'] && receiptModals.length !== 0) {
      toRender.push(
        <Table.Cell key={this.keyCount++}>
          <Receipt num={this.receiptCount++}/>
        </Table.Cell>
      )
    } else {
      toRender.push(
        <Table.Cell key={this.keyCount++}>
          N/A
        </Table.Cell>
      )
    }
    return toRender
  }

  getEmptyRows (size) {
    const { propertyArray } = this.props
    const emptyRows = []
    for (let i = 0; i < size; i++) {
      emptyRows.push(
        <Table.Row key={this.keyCount++}>{/* used count to prevent duplicate map keys */}
          <Table.Cell>
            <Image rounded size='small' src={require('../../../../public/images/blank.jpg')}/>
          </Table.Cell>
          {propertyArray.map(e => {
            return (<Table.Cell key={this.keyCount++}/>)
          })}
          <Table.Cell/>
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
    this.keyCount = 0
    this.receiptCount = 0
    cars.forEach(e => {
      arr.push(
        <Table.Row key={this.keyCount}>
          {this.getRowContents(count++)}
        </Table.Row>
      )
    })
    const emptyCells = this.getEmptyRows(minSize - cars.length)
    const toRender = [...arr, ...emptyCells]
    return toRender
  }

  async onClickHandler (imageId, obj) {
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
        await deleteDocument('cars', imageId)
        await storage.ref().child(`cars/${imageId}`).delete()
        await getCarsAdvertised(userUID)
        const user = await getDocumentUID('users', userUID)
        const userData = user.data()
        delete userData.isAdmin // To not include isAdmin property
        const transaction = { // To prevent them from having a transaction in real life and then just cancelling for free advertisment
          ...userData,
          fee: parseFloat(obj.Price) * 0.02,
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
