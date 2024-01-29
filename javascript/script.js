// AMBIL BUTTON NEXT DAN MEMBERIKAN FUNGSI KETIKA TOMBOL DI TEKAN
document.getElementById("next").onclick = function() {
    // FUNGSI UNTUK MEMBUAT SLIDE KE 1 DI PINDAH KE ELEMENT TERAKHIR DENGAN ID WRAPPER
    // DAN SLIDE KE 2 TETAP ( SEAKAN AKAN KETIKA DI NEXT ELEMENT SALING MENIMPA )
    let list = document.querySelectorAll(".slide");
    document.getElementById("wrapper").appendChild(list[0]);
}
// AMBIL BUTTON PREV DAN MEMBERIKAN FUNGSI KETIKA TOMBOL DI TEKAN
document.getElementById("prev").onclick = function() {
    // FUNGSI UNTUK MEMBUAT ELEMENT TERAKHIR MENJADI ANAK PERTAMA DARI PARENTNYA
    let list = document.querySelectorAll(".slide");
    document.getElementById("wrapper").prepend(list[list.length - 1]);
}
