function tebakUmur(umurKucingku) {
  const satu = 15;
  const dua = 24;
  const tiga = 24 + (umurKucingku - 2) * 4;

  if (umurKucingku === 1) {
    return satu;
  } else if (umurKucingku === 2) {
    return dua;
  } else if (umurKucingku >= 3) {
    return tiga;
  } else {
    return umurKucingku;
  }
}

const masukanUmur = prompt("Hitung umur kucing dalam usia manusia");
alert(
  " Jadi " +
    masukanUmur +
    " umur kucing adalah " +
    tebakUmur(masukanUmur) +
    " tahun umurnya manusia."
);
