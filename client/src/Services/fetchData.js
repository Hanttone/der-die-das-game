export default async function fetchData() {
  try {
    let allData = [];

    const dataUrls = [
      'http://localhost:4000/api/scores',
      'http://localhost:4000/api/germannouns',
    ];

    const arrayOfPromises = dataUrls.map((url) =>
      fetch(url)
    );
    for await (let request of arrayOfPromises) {
      const data = await request.json();
      allData.push(data);
    }
    return allData;
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
