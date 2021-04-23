const router = require("express").Router();

const db = require("../../models");

// getLastWorkout
// most recent date
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ day: "desc" })
    .then((dbWorkout) => {
      res.json(dbWorkout[0]);
    })
    .catch((err) => {
      res.json(err);
    });
});

// addExercise
// post exercise into workout
router.post("/workouts", ({ body }, res) => {
  db.Exercise.create(body)
    console.log(body)
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// post a new workout
// empty no exercises yet

// get specific workouts
// based on criteria- date range?
module.exports = router;
