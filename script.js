// script.js

// Fungsi untuk mendapatkan salam berdasarkan waktu
function getGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Good Morning!";
    } else if (currentHour < 18) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}

// Fungsi untuk mendapatkan waktu saat ini dalam format yang mudah dibaca
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `Current Time: ${hours}:${minutes}:${seconds}`;
}

// Menampilkan salam dinamis
document.getElementById("greeting").textContent = getGreeting();

        function goToValorantPage() {
            window.location.href = "game/valorant.html"; // Ganti URL sesuai kebutuhan
        }
        function goTodotaPage() {
            window.location.href = "game/dota2.html"; // Ganti URL sesuai kebutuhan
        }
        function goToapexPage() {
            window.location.href = "game/apex.html"; // Ganti URL sesuai kebutuhan
        }
        function goTocsgoPage() {
            window.location.href = "game/csgo.html"; // Ganti URL sesuai kebutuhan
        }
        function goTopubgPage() {
            window.location.href = "game/pubg.html"; // Ganti URL sesuai kebutuhan
        }
        function goToleaguePage() {
            window.location.href = "game/league.html"; // Ganti URL sesuai kebutuhan
        }
        function goTooverwatchPage() {
            window.location.href = "game/overwatch.html"; // Ganti URL sesuai kebutuhan
        }
        function goTorainbowPage() {
            window.location.href = "game/rainbow.html"; // Ganti URL sesuai kebutuhan
        }
        function goTominecraftPage() {
            window.location.href = "game/minecraft.html"; // Ganti URL sesuai kebutuhan
        }
        function goTodeltaforcePage() {
            window.location.href = "game/delta.html"; // Ganti URL sesuai kebutuhan
        }
// Memperbarui waktu setiap detik
function updateTime() {
    document.getElementById("current-time").textContent = getCurrentTime();
}
setInterval(updateTime, 1000);


// Menjalankan pembaruan waktu saat halaman pertama kali dimuat
updateTime();
