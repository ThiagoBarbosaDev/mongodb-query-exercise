db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
db.produtos.updateOne(
  { tags: { $in: ["bovino"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);
db.produtos.find({}, { nome: true, vendasPorDia: true, _id: false });
