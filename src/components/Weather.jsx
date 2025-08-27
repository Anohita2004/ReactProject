function Weather(props) {
  let message;

  if (props.temperature < 15) {
    message = <h1>It's cold outside!</h1>;
  } else if (props.temperature >= 15 && props.temperature <= 25) {
    message = <h1>It's nice outside!</h1>;
  } else {
    message = <h1>It's hot outside!</h1>;
  }

  return message;
}

export default Weather;
