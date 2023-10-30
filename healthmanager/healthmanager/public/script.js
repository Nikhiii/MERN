document.addEventListener("DOMContentLoaded", function () {
    const activitiesList = document.getElementById("activities");
    const activityInput = document.getElementById("activity");
    const durationInput = document.getElementById("duration");
    const addActivityButton = document.getElementById("add-activity");
    const healthStatusText = document.getElementById("health-status-text");
    const caloriesBurntText = document.getElementById("calories-burnt");

    const activities = [];

    addActivityButton.addEventListener("click", function (event) {
        // Prevent the default form submission behavior.

    // Add code here to handle the activity input and duration.
    // Ensure you validate the input, and if it's valid:
    // - Add the activity and duration to the 'activities' array.
    // - Update the list of activities displayed on the page.
    // - Clear the input fields for the next entry.
    // - Finally, call the 'calculateCaloriesBurnt()' function to recalculate calories.
    });

    activitiesList.addEventListener("click", function (event) {

         // If a 'BUTTON' element within the 'activitiesList' is clicked:
         // Extract the index associated with the clicked button.
         // Remove the activity from the 'activities' array based on the extracted index.
          // Update the list of activities displayed on the page.
          // Recalculate calories after removing the activity.
    });

    function updateActivitiesList() {

        // Clear the current content of the 'activitiesList' element.
         // Create a list item element for each activity.
          // Populate the list item with the activity information and a 'Delete' button.
           // Append the list item to the 'activitiesList' element.
    }   

//function for calculateCaloriesBurnt
    const MET = {
            Running: 7.0,
            Yoga: 3.0,
            Cycling: 8.0,
            Swimming: 7.0,
            JumpingRope: 12.0,
            Walking: 3.9,
            Basketball: 6.0,
            Tennis: 6.0,
            Weightlifting: 3.0,
            Dancing: 5.0,
            Hiking: 6.0,
            Pilates: 3.5,
            // Add more activities and their corresponding MET values here.
        };
        const weightInput = document.getElementById("weight");
        const weight = parseFloat(weightInput.value) || 70; // Default weight to 70 kg if not provided by the user.

    let totalCaloriesBurnt = 0;

    // Loop through the list of activities and calculate calories burnt for each

        // Calories burnt formula: (MET * 3.5 * weight in kg * duration in minutes) / 200

    // Set a calorie threshold for "Healthy"

    // Determine health status "Healthy" : "Not So Healthy"


   


});


