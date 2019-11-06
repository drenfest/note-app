let notes = [
    {
        id: 1,
        noteTitle:"Note 1",
        noteText:"Note Text 1"
    },{
        id: 2,
        noteTitle:"Note 2",
        noteText:"Note Text 2"
    },{
        id: 3,
        noteTitle:"Note 3",
        noteText:"Note Text 3"
    },
];

exports.getNotes = (req, res, next) => {
    res.setHeaders = {
        "Content-Type":"application/json"
    };
    res.status(200).json({success:true,msg:"Get All Notes",data:notes});
    next();
};

exports.getNote = (req, res, next) => {
    res.setHeaders = {
        "Content-Type":"application/json"
    };
    let note = notes.find(function(note){
        return note.id === parseInt(req.params.id)
    });
    res.status(200).json({success:true,msg:"Get One Note",data:note});
    next();
};

exports.addNote = (req, res, next) => {
    res.setHeaders = {
        "Content-Type":"application/json"
    };
    let newNote = {
        id:(notes.length+10),
        noteTitle:req.body.noteTitle,
        noteText:req.body.noteText
    };
    notes.push(newNote);
    res.status(200).json({success:true,msg:"Add New Note",data:newNote});
    next();
};

exports.updateNote = (req, res, next) => {
    res.setHeaders = {
        "Content-Type":"application/json"
    };
    let note = notes.find(function(notes){
        return notes.id === parseInt(req.params.id)
    });
    if(req.body.noteTitle){
        note.noteTitle = req.body.noteTitle;
    }
    if(req.body.noteText){
        note.noteText = req.body.noteText;
    }
    res.status(200).json({success:true,msg:"Update Note",data:note});
    next();
};

exports.deleteNote = (req, res, next) => {
    let notesClone = [];
    res.setHeaders = {
        "Content-Type":"application/json"
    };
    let note = notes.find(function(notes){
        return notes.id === parseInt(req.params.id)
    });
    for(var i = 0; i < notes.length; i++){
        if (notes[i].id !== parseInt(req.params.id)){
            notesClone.push(notes[i]);
        }
    }
    notes = notesClone;
    // console.log(notes.indexOf(note));
    //notes.splice(notes.indexOf(note)+1,1);
    res.status(200).json({success:true, msg:"Delete Note", data:notes} );
    next();
};