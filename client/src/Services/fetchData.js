export default async function fetchData(
  apiFetch = fetch
) {
  try {
    let allData = [];

    const dataUrls = [
      'https://der-die-und-das.herokuapp.com/api/scores',
      'https://der-die-und-das.herokuapp.com/api/germannouns',
    ];

    const arrayOfPromises = dataUrls.map((url) =>
      apiFetch(url)
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
