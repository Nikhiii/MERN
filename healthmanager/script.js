document.addEventListener("DOMContentLoaded", function () {
    const activitiesList = document.getElementById("activities");
    const activityInput = document.getElementById("activity");
    const durationInput = document.getElementById("duration");
    const addActivityButton = document.getElementById("add-activity");
    const healthStatusText = document.getElementById("health-status-text");
    const caloriesBurntText = document.getElementById("calories-burnt");

    const activities = [];

    addActivityButton.addEventListener("click", function (event) {
        event.preventDefault();
        const activity = activityInput.value;
        const duration = parseInt(durationInput.value);

        if (activity.trim() !== "" && !isNaN(duration) && duration > 0) {
            activities.push({ activity, duration });
            updateActivitiesList();
            activityInput.value = "";
            durationInput.value = "";
            calculateCaloriesBurnt();
        }
    });

    activitiesList.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            const index = event.target.dataset.index;
            activities.splice(index, 1);
            updateActivitiesList();
            calculateCaloriesBurnt();
        }
    });

    function updateActivitiesList() {
        activitiesList.innerHTML = "";
        activities.forEach((activity, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${activity.activity} - ${activity.duration} minutes</span>
                <button data-index="${index}">Delete</button>
            `;
            activitiesList.appendChild(listItem);
        });
    }   

    function calculateCaloriesBurnt() {
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

    for (const activity of activities) {
        if (MET[activity.activity]) {
            const caloriesBurnt = (MET[activity.activity] * 3.5 * weight * activity.duration) / 200;
            totalCaloriesBurnt += caloriesBurnt;
        }
    }
    console.log(totalCaloriesBurnt);

    caloriesBurntText.textContent = `Calories Burnt: ${totalCaloriesBurnt.toFixed(2)} calories`;

    // Set a calorie threshold for "Healthy"
    const calorieThreshold = 1000; // Adjust as needed

    // Determine health status
    const healthStatus = totalCaloriesBurnt >= calorieThreshold ? "Healthy" : "Not So Healthy";
    healthStatusText.textContent = `Your Health Status: ${healthStatus}`;
}


});


