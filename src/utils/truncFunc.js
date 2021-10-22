function numberWithCommas(value) {
  const truncValue = Math.trunc(value);
  return truncValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default numberWithCommas;
