const router = require("express").Router();
const db = require("../../models");

// getLastWorkout-- done
// most recent workout plan
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ day: "desc" })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// addExercise
// post exercise into workout plan
router.put("/workouts/:id", ({ params, body }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
  
    { $push: { exercises: body }},
    { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// createWorkout-- done
// empty no exercises yet
router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
})

// getWorkoutsInRange
// get specific workouts
// based on criteria- date range?
// view combined weight of multiple exerciese from the past seven workouts on the stats page
// view total duration of each workout from the past seven workouts on the stats page

module.exports = router;
