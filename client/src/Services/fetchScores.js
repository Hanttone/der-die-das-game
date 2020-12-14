export default async function fetchData() {
  try {
    let scoreData = [];
    fetch('http://localhost:4000/api/scores')
      .then((res) => res.json())
      .then((data) => scoreData.push(data));
    return scoreData;
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
