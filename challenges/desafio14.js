db.produtos.find(
  { ingredientes: { $in: ["picles"] } },
  {
    nome: true,
    ingredientes: true,
    _id: false,
    valoresNutricionais: { $slice: 3 },
  },
);
