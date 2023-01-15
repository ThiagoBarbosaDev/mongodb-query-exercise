db.produtos.updateMany(
  { nome: { $ne: "McChicken" }, ingredientes: { $nin: ["ketchup"] } },
  { $push: { ingredientes: "ketchup" } },
);
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });
