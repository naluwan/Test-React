export const fetchCityItem = () => {
  return (dispatch) => {
    fetch('https://raw.githubusercontent.com/JiaAnTW/mask/master/dist.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'SET_ITEM',
          payload: { itemNewArr: data['cityList'] },
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
