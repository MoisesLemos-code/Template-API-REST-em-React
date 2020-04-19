const Ferramenta = require('../models/Ferramenta');

module.exports = {

  async index(req, res) {
    const ferramenta = await Ferramenta.findById(req.params.id);
    return res.json(ferramenta);
  },
  async list(req, res) {
    const ferramentas = await Ferramenta.find({});
    return res.json(ferramentas);
  },
  async post(req, res) {
    const ferramenta = await Ferramenta.create(req.body);
    return res.json(ferramenta);
  },
  async update(req, res) {
    const ferramenta = await Ferramenta.updateOne({ _id: req.params.id }, req.body);
    return res.json(ferramenta);
  },
  async delete(req, res) {
    await Ferramenta.findByIdAndDelete(req.params.id);
    return res.json({ success: "ok" });
  },
}