const express = require("express");
const app = express();

// Root
app.get("/", (req, res) => {
  res.json({ messagen: "Hello Word" });
});

// /test
app.get("/test", (req, res) => {
  res.json({ messagen: "Testando a API" });
});

const movieList = [
  {
    title: "A Lista de Schindler",
    subTitle:
      "Um retrato poderoso do Holocausto, com atuações marcantes e uma história emocionante sobre a humanidade em tempos de guerra.",
    image:
      "https://www.planocritico.com/wp-content/uploads/2018/08/91-A_Lista_de_Schindler.jpg",
  },
  {
    title: "O Poderoso Chefão",
    subTitle:
      "Uma obra-prima do cinema que explora a vida de uma família mafiosa, com personagens complexos e uma narrativa envolvente.",
    image:
      "https://super.abril.com.br/wp-content/uploads/2022/04/SI_438_Abre_PL_site.jpg?quality=90&strip=info&w=720&h=440&crop=1",
  },
  {
    title: "Pulp Fiction",
    subTitle:
      "Um filme cult de Quentin Tarantino, com diálogos afiados, humor negro e uma narrativa não linear que desafia as convenções do cinema.",
    image: "https://www.miramax.com/assets/Pulp-Fiction1.png",
  },
  {
    title: "O Senhor dos Anéis",
    subTitle:
      "A primeira parte da épica trilogia de J.R.R. Tolkien, com visuais deslumbrantes, personagens cativantes e uma história emocionante sobre o bem contra o mal.",
    image:
      "https://classic.exame.com/wp-content/uploads/2023/10/Sem-titulo1.png?w=1024",
  },
  {
    title: "Titanic",
    subTitle:
      "Uma história de amor épica ambientada no naufrágio do Titanic, com efeitos especiais impressionantes e atuações memoráveis.",
    image: "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg",
  },
];

// /movielist
app.get("/movielist", (req, res) => {
  res.json(movieList);
});

//http://localhost:3000
app.listen(3000, () => {
  console.log("Server run....");
});
