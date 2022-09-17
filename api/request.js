const time = new Date()
export const json = {
    doctor:{
        "name": "Josias",
        "crm": "COT-12345-SER43R",
        "area": "Pediatria"
    },
    patient:{
        "name": "Maria",
        "doctor": "Josias",
        "illness": "Rinite",
        "isDisable": false,
        "disable": "N/A",
        "lastQuery": time.getDate(),
        "nextQuery": time.getDate()
    },
    room:{
        "level": 1,
        "function": "query",
        "isBusy": false,
        "doctor": "Josias",
        "patient": "Maria"
    }
}
export function request(req, res){
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'application/json');
    res.json(json)
}

