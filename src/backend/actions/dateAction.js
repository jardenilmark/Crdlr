function getTransactionDate (transaction) {
  return {
    type: 'GET_DATE',
    payload: {
      dateStart: transaction.dateStart,
      dateEnd: transaction.dateEnd
    }
  }
}

export function setTransactionDate (date) {
  return (dispatch) => {
    dispatch(getTransactionDate(date))
  }
}
