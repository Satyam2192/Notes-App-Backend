const { auth, isAdmin } = require("../middlewares/auth");
const Notes = require("../models/Notes");



// define routes handler

// for get request
exports.getNotes = async (req, res) => {
    try {
      const notess = await Notes.find(); // Use await to asynchronously get the notess
      res.json(notess);
    } catch (err) {
      console.log("error in get request");
      console.error(err);
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: err.message,
      });
    }
  };

// for get request with id
exports.getNotesById = async (req, res) => {
  try {
    // Retrieve the notes ID from the request parameters
    const notesId = req.params.id;
 
    // Find the notes with the specified ID
    const notes = await Notes.findById(notesId);
 
    // Check if the notes was not found
    if (!notes) {
      return res.status(404).json({
        success: false,
        message: "Notes not found",
      });
    }
 
    // Return the notes details in the response
    res.json(notes);
 
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
 };

 
//for post request
exports.createNotes = async (req, res) => {
    try {
      // extract title and description from request body
      const notes = await Notes.create(req.body); // Use await to asynchronously create the notes
      res.status(201).json({ message: "Notes added successfully", data: notes }); // Use 201 status for successful creation
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: err.message,
      });
    }
  };



//for update request
exports.UpdateNotes = (req, res) =>{
    try{
        Notes.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => res.status(200).json({message:"updated successfully", data}))
    }catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          data: "internal server error at update request",
          message: err.message,
        });
      }
};

//for delete request
exports.deleteNotes = (req,res) =>{
    try{
        Notes.findByIdAndDelete(req.params.id, req.body)
            .then((data)=>res.status(200).json({message:"Deleted successfully", data}))
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data: "internal server error at delete request",
            message:err.message,
        });
    }
}