export default function postScore(playerInfo) {
  fetch(
    'https://nameless-wildwood-39750.herokuapp.com/api/scores',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerInfo),
    }
  )
    .then((data) => data.json())
    .then((createdUser) =>
      console.log(createdUser, 'CREATED')
    )
    .catch((error) => console.error(error));
}
