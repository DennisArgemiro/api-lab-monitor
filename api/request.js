const time = new Date();

module.exports= (req, res)=>{
  res.statusCode = 200;
  res.setHeader = ("Content-Type", "application/json");
  res.end({
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
      lastQuery: time.getDate(),
      nextQuery: time.getDate(),
    },
    room: {
      level: 1,
      function: "query",
      isBusy: false,
      doctor: "Josias",
      patient: "Maria",
    },
  });
}
