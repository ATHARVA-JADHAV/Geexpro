const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const leaderboardTable = document.getElementById("leaderboardTable");

database.ref("leaderboard").orderByChild("score").on("value", function(snapshot) {
    const leaderboardData = [];
    snapshot.forEach(function(childSnapshot) {
        const entry = childSnapshot.val();
        leaderboardData.push(entry);
    });

    leaderboardData.reverse(); // Reverse the data array to display in descending order by score

    leaderboardData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${entry.score}</td>`;
        leaderboardTable.appendChild(row);
    });
});
