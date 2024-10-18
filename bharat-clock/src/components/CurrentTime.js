function CurrentTime() {
  let time = new Date().toLocaleString();

  return <p className="fw-semibold lead">This is the current time: {time}</p>;
}

export default CurrentTime;
