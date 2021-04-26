const router = require("express").Router();

const db = require("../../models");

// create a workout plan
db.Workout.create({ name: "Workout Plan" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });

// getLastWorkout-- done
// most recent workout plan
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ day: "desc" })
    .populate("exercise")
    .then((dbWorkout) => {
      res.json(dbWorkout[0]);
    })
    .catch((err) => {
      res.json(err);
    });
});

// addExercise
// post exercise into workout plan
// router.post("/workouts/?id=", ({ body }, res) => {
//   // const exercise = new Exercise(body)
//   // exercise.getWorkout();
//   db.Exercise.create(body)
//     console.log(body)
//     .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });



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
