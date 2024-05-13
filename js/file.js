// file.js

document.querySelector('form').addEventListener('submit', function (e) {
    var fakultas = document.getElementById('fakultas');
    var program_studi = document.getElementById('program_studi');
    
    if (fakultas.value === '' || program_studi.value === '') {
        e.preventDefault();
        alert('Harap pilih Fakultas dan Program Studi terlebih dahulu.');
    }
});

 // Function to show a pop-up message
 function showSuccessMessage() {
    alert("Anda telah berhasil mendaftar! Silakan tunggu hasil seleksi dari panitia.");
  }
   // Menghasilkan nomor pendaftaran secara acak (misalnya, angka acak antara 1000 dan 9999)
   var nomorPendaftaran = Math.floor(Math.random() * 9000) + 1000;

  // Call the function when the document is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Show the success message as soon as the document is loaded
    showSuccessMessage();
  });