 const Task = require("../models/ToDo");
 const express = require("express");
 const router = express.Router();

 router.post("/", async (req, res) => {
   try {
     const task = await new Task(req.body).save();
     res.send(task);
   } catch (error) {
     res.send(error);
   }
 });

 router.get("/", async (req, res) => {
   try {
     const tasks = await Task.find();
     res.send(tasks);
   } catch (error) {
     res.send(error);
   }
 });

 router.put("/:id", async (req, res) => {
   try {
     const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
     res.send(task);
   } catch (error) {
     res.send(error);
   }
 });

 router.delete("/:id", async (req, res) => {
   try {
     const task = await Task.findByIdAndDelete(req.params.id);
     res.status(200).json({
       task : task,
       success : true ,
       Message : "Task Delete"
     });
   } catch (error) {
     res.send(error);
   }
 });

 module.exports = router;