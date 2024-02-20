// ignore: duplicate_ignore
// ignore_for_file: file_names, duplicate_ignore, empty_constructor_bodies
// ignore: file_names
enum Edifficulty {hard, medium, easy}
enum Eseason {summer, spring, winter, fall}

class Activity {
  final int id;
  final String name;
  final String picture;
  final String review;
  final int rating;
  final int durationinHours;
  final Edifficulty difficulty;
  final Eseason season;

  Activity (this.id, this.name, this.picture, this.review, this.rating, this.durationinHours, this.difficulty, this.season);

  
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'picture': picture,
      'review': review,
      'rating': rating,
      'durationinHours': durationinHours,
      'difficulty': difficulty.toString().split('.').last,
      'season': season.toString().split('.').last,
    };
  }
}


