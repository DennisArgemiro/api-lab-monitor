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
      name: "centrifuga",
      busy: false,
      lastMaintence: "12/12/2022"
        },
    storage: [
      {
        id: 01,
        name: "Luva de predero",
        type: "insumos",
      },
      {
        id:02,
        name: "Tubo de ensaio",
        type: "insumos"
      },
      {
        id: 3,
        name: "reagente 1",
        type: "reagente"
      }
    ],
  });
};
