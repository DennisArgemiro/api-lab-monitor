const time = new Date();

module.exports = (req, res) => {
  res.json({
    patient: {
      id: 01,
      name: "Josias",
      age: 39,
      exam: "Hepatite",
      sample: "A+",
    },
    machine: {
      id: 01,
      busy: false,
      lastMaintence: time.getDate(),
    },
    storage: [
      {
        id: 01,
        name: "insulina",
        type: "insumos",
      },
      {
        id:02,
        name: "Tubo de ensaio",
        type: "geral"
      },
    ],
  });
};
