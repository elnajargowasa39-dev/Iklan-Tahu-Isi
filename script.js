let jumlahKlik = 0;

function klikIklan(){

    jumlahKlik++;

    document.getElementById("jumlahKlik").innerHTML =
    "Jumlah Klik : " + jumlahKlik;

    alert("Terima kasih telah memilih Tahu Isi Crispy!");

    // Ganti link di bawah dengan link GitHub Pages Anda
    window.location.href = "https://elnajargowasa39-dev.github.io/Iklan-Tahu-Isi-Crispy/";
}