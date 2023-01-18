function computeLoan() {
    const pinjaman = document.querySelector("#pinjaman").value;
    const suku_bunga = document.querySelector("#suku_bunga").value;
    const bulan = document.querySelector("#bulan").value;
    const suku = (pinjaman * (suku_bunga * 0.01)) /bulan;
    const pembayaran = (pinjaman / bulan + suku).toFixed(0);

    document.querySelector("#pembayaran").innerHTML = `Monthly pembayaran = ${pembayaran}`;
}