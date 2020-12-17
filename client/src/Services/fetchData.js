export default async function fetchData() {
  try {
    let allData = [];

    const dataUrls = [
      'https://nameless-wildwood-39750.herokuapp.com/api/scores',
      'https://nameless-wildwood-39750.herokuapp.com/api/germannouns',
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
