function getTransactionInfo (transaction) {
  return {
    type: 'GET_DATE',
    payload: {
      dateStart: transaction.dateStart,
      dateEnd: transaction.dateEnd,
      active: transaction.activeItem
    }
  }
}

export function setTransactionInfo (info) {
  return (dispatch) => {
    dispatch(getTransactionInfo(info))
  }
}
