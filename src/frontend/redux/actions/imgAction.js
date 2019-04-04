import { getData } from '../../../backend/data'

export function setImageFile (file) {
  return (dispatch) => {
    dispatch(getData('GET_IMAGE_FILE', file))
  }
}
