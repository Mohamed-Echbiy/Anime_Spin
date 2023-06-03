const fs = require("fs");

async function fetchData() {
  const response = await fetch(
    "https://api.consumet.org/meta/anilist/popular?page=5&perPage=50"
  );
  const data = await response.json();

  console.log("------------");
  console.log(data);
  console.log("------------");

  const response1 = await fetch(
    "https://api.consumet.org/meta/anilist/popular?page=6&perPage=50"
  );
  const data1 = await response1.json();

  console.log("------------");
  console.log(data1);
  console.log("------------");

  const response2 = await fetch(
    "https://api.consumet.org/meta/anilist/popular?page=7&perPage=50"
  );
  const data2 = await response2.json();

  console.log("------------");
  console.log(data2);
  console.log("------------");

  const response3 = await fetch(
    "https://api.consumet.org/meta/anilist/popular?page=8&perPage=50"
  );
  const data3 = await response3.json();
  console.log("------------");
  console.log(data3);
  console.log("------------");

  const fullData = JSON.stringify({
    data: [
      ...data.results,
      ...data1.results,
      ...data2.results,
      ...data3.results,
    ],
  });
  fs.writeFile("./assets/data1.json", fullData, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Data has been saved to data.json");
    }
  });
}

fetchData();
