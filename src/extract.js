const fs = require("fs");

async function fetchData() {
  const response = await fetch(
    "https://api.jikan.moe/v4/top/characters?page=1"
  );
  const data = await response.json();

  console.log("------------");
  console.log(data);
  console.log("------------");

  const response1 = await fetch(
    "https://api.jikan.moe/v4/top/characters?page=2"
  );
  const data1 = await response1.json();

  console.log("------------");
  console.log(data1);
  console.log("------------");

  const response2 = await fetch(
    "https://api.jikan.moe/v4/top/characters?page=3"
  );
  const data2 = await response2.json();

  console.log("------------");
  console.log(data2);
  console.log("------------");

  const response3 = await fetch(
    "https://api.jikan.moe/v4/top/characters?page=4"
  );
  const data3 = await response3.json();
  console.log("------------");
  console.log(data3);
  console.log("------------");

  const fullData = JSON.stringify({
    data: [...data.data, ...data1.data, ...data2.data],
  });
  fs.writeFile("data.json", fullData, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Data has been saved to data.json");
    }
  });
}

fetchData();
