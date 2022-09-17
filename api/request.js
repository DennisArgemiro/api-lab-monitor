const time = new Date();

module.exports= (req, res)=>{
  res.json({
    doctor: {
      name: "Josias",
      crm: "COT-12345-SER43R",
      area: "Pediatria",
    },
    patient: {
      name: "Maria",
      doctor: "Josias",
      illness: "Rinite",
      isDisable: false,
      disable: "N/A",
      lastQuery: "11/09",
      nextQuery: "13/09",
    },
    room: {
      level: 1,
      function: "query",
      isBusy: false,
      doctor: "Josias",
      patient: "Maria",
      machines:[{
        name:"Centrifuga",
        lastUse: "10/07",
        lastUser: "Josias",
        state: false,
      },
      {
        name:"Agitador",
        lastUse: "06/07",
        lastUser: "Josias",
        state: true,
      },
      {
        name:"Espectrofotômetro",
        lastUse: "10/07",
        lastUser: "Josias",
        state: false,
      }]
    },
    machines:{
        name: "",
        lastUse: "",
        lastUser: "",
        state: true,
    }
  });
}
