function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Ambil elemen audio
const audio = document.getElementById('audio');

// Mengatur status audio saat halaman dimuat
window.onload = function() {
    const savedTime = localStorage.getItem('audioTime'); // Ambil waktu terakhir diputar
    const isPlaying = localStorage.getItem('audioPlaying') === 'true'; // Ambil status pemutaran

    if (savedTime) {
        audio.currentTime = savedTime; // Set waktu audio ke yang tersimpan
    }

    // Memastikan audio melanjutkan atau dijeda sesuai status
    if (isPlaying) {
        audio.play(); // Jika sebelumnya diputar, lanjutkan
    } else {
        audio.pause(); // Jika tidak, pastikan audio dijeda
    }

    // Memeriksa status volume dan mengatur ikon
    const volumeIcon = document.getElementById('volume-icon');
    if (isPlaying) {
        volumeIcon.classList.replace("bx-volume-mute", "bx-volume-full");
    } else {
        volumeIcon.classList.replace("bx-volume-full", "bx-volume-mute");
    }
};

// Menyimpan waktu saat audio diputar
audio.addEventListener('timeupdate', function() {
    localStorage.setItem('audioTime', audio.currentTime); // Simpan waktu saat ini
});

// Menyimpan status pemutaran audio saat berhenti
audio.addEventListener('pause', function() {
    localStorage.setItem('audioPlaying', 'false'); // Simpan status berhenti
});

// Menyimpan status pemutaran audio saat diputar
audio.addEventListener('play', function() {
    localStorage.setItem('audioPlaying', 'true'); // Simpan status diputar
});

// Fungsi untuk toggle audio (play/pause)
function toggleAudio() {
    const volumeIcon = document.getElementById('volume-icon');

    if (audio.paused) {
        audio.play(); // Jika audio dijeda, play
        volumeIcon.classList.replace("bx-volume-mute", "bx-volume-full"); // Ganti ikon ke volume penuh
    } else {
        audio.pause(); // Jika audio diputar, pause
        volumeIcon.classList.replace("bx-volume-full", "bx-volume-mute"); // Ganti ikon ke mute
    }
}

// Fungsi untuk toggle menu
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
