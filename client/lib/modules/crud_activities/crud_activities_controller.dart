import 'package:client/models/Activity.dart';
class ActivityController {
 Map<String, List<Activity>> activitiesByCountry = {};

 void addActivity(String country, Activity activity){
  if(!activitiesByCountry.containsKey(country)){
    activitiesByCountry[country] = [];
  }
  if(!activitiesByCountry[country]!.any((a) => a.name == activity.name)){
    activitiesByCountry[country]!.add(activity);
  }
 }

 void deleteActivity(String country, int activityID){
  activitiesByCountry[country]?.removeWhere((a) => a.id == activityID);
 }

 Activity? searchActivity (String country, String activityName){
  return activitiesByCountry[country]?.firstWhere((a) => a.name == activityName);
 }
 
}