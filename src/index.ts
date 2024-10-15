
async function getQuote() {
  const url = '';
  const resObj = await fetch(url);
  const data = await resObj.json();

  console.log(data);

}

getQuote();