function getTransactionInfo (transaction) {
  return {
    type: 'GET_DATE',
    payload: {
      date: transaction.date,
      active: transaction.activeItem
    }
  }
}

export function setTransactionInfo (info) {
  return (dispatch) => {
    dispatch(getTransactionInfo(info))
  }
}
