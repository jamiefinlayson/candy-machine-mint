const { MODE } = require("./blendMode");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://QmNfPMWLPTEbFpBtPFy4wkYEHRVWcz8dzjziTcPbebzF53";

const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Skin" },
      { name: "Eyes" },
      { name: "Clothing" },
      { name: "Chain" },
      { name: "Teeth" },
      { name: "Headwear" },
      { name: "Item" },
    ],
  },
];

const format = {
  width: 1200,
  height: 1200,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
