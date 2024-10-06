/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const bluePack = {
  name: "Ocean Pack",
  color: "blue",
  volume: 10,
  pocketNum: 4,
}

const addPack = function (currentPack) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};

const theArticle = addPack(bluePack);
console.log(theArticle);

const main = document.querySelector("main");
// main.append(addPack(greenPack));
main.append(addPack(bluePack));