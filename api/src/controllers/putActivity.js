// const { Activity, Country } = require('../db')
// const {conn} = require ('../db')

// const putActivity = async (req, res) => {
//   try {
//     const { name, picture, difficulty, duration_inHours, season, rating, countries } = req.body;

//     let activity = await Activity.findOne({
//       where: { name },
//       include: { model: Country },
//     });

//     if (!activity) {
//       res.status(404).json({ error: "Activity not found" });
//       return;
//     }

//     await activity.update({
//       picture,
//       difficulty,
//       duration_inHours,
//       season,
//       rating
//     });

//     if (countries && countries.length > 0) {
//       await activity.setCountries(countries);
//     }
//     const activityWithCountries = await Activity.findOne({
//       where: { ID: activity.ID },
//       include: { model: Country },
//     });

//     res.status(200).json(activityWithCountries);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//     console.log(error.message);
//   }
// };

// module.exports = {
//     putActivity,
// }
