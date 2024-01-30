// ignore: duplicate_ignore
// ignore_for_file: file_names, duplicate_ignore, empty_constructor_bodies
// ignore: file_names
enum Edifficulty {hard, medium, easy}
enum Eseason {summer, spring, winter, fall}

class Activity {
  final int id;
  final String name;
  final String picture;
  final int rating;
  final int durationinHours;
  final Edifficulty difficulty;
  final Eseason season;

  Activity (this.id, this.name, this.picture, this.rating, this.durationinHours, this.difficulty, this.season);
}
