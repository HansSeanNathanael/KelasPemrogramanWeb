let inputNamaPasien = document.getElementById("nama-pasien");
let inputTempatLahir = document.getElementById("tempat-lahir");
let inputTanggalLahir = document.getElementById("tanggal-lahir");
let inputJenisKelamin = document.getElementById("jenis-kelamin");
let inputAlamat = document.getElementById("alamat");
let inputRT = document.getElementById("rt");
let inputRW = document.getElementById("rw");
let inputProvinsi = document.getElementById("provinsi");
let inputKecamatan = document.getElementById("kecamatan");
let inputKelurahan = document.getElementById("kelurahan");
let inputNoTelepon = document.getElementById("nomor-telepon");
let inputKodePos = document.getElementById("kode-pos");
let inputAgama = document.getElementById("agama");
let inputPendidikanTerakhir = document.getElementById("pendidikan-terakhir");
let inputPekerjaan = document.getElementById("pekerjaan");
let inputHubunganDenganPasien = document.getElementById("hubungan-dengan-pasien");
let inputNamaPenanggungJawab = document.getElementById("nama-penganggung-jawab");
let inputPendidikanPenanggungJawab = document.getElementById("pendidikan-penanggun-jawab");
let inputPekerjaanPenanggungJawab = document.getElementById("pekerjaan-penanggung-jawab")
let inputTandaTangan = document.getElementById("tanda-tangan");

function submit_data() {
    
    let namaPasien = inputNamaPasien.value;
    let tempatLahir = inputTempatLahir.value;
    let tanggalLahir = inputTanggalLahir.value;
    let jenisKelamin = inputJenisKelamin.value;
    let alamat = inputAlamat.value;
    let rt = inputRT.value;
    let rw = inputRW.value;
    let provinsi = inputProvinsi.value;
    let kecamatan = inputKecamatan.value;
    let kelurahan = inputKelurahan.value;
    let noTelepon = inputNoTelepon.value;
    let kodePos = inputKodePos.value;
    let agama = inputAgama.value;
    let pendidikanTerakhir = inputPendidikanTerakhir.value;
    let pekerjaan = inputPekerjaan.value;
    let hubunganDenganPasien = inputHubunganDenganPasien.value;
    let namaPenanggungJawab = inputNamaPenanggungJawab.value;
    let pendidikanPenanggungJawab = inputPendidikanPenanggungJawab.value;
    let pekerjaanPenanggungJawab = inputPekerjaanPenanggungJawab.value;
    let tandaTangan = inputTandaTangan.files;

    let regexNama = /^[a-zA-Z ]*$/;
    let regexAlphaNumerik = /^[a-zA-Z0-9 ]*$/;
    let regexTempatLahir = /^[a-zA-Z ,]*$/;
    let regexAlamat = /^[a-zA-Z0-9 ,]*$/;
    let regexNumerik = /^[0-9]*$/;

    if (
        namaPasien == "" || tempatLahir == "" || tanggalLahir == "" || jenisKelamin == 0 || alamat == "" || provinsi == "" || 
        kecamatan == "" || kelurahan == "" || noTelepon == "" || kodePos == "" || agama == 0 || pendidikanTerakhir == "" ||
        pekerjaan == "" || hubunganDenganPasien == "" || namaPenanggungJawab == "" || pendidikanPenanggungJawab == "" ||
        pekerjaanPenanggungJawab == "" || tandaTangan.length == 0 || rt == "" || rw == ""
    ) {
        alert("Data tidak lengkap");
    }
    else if (!regexNama.test(namaPasien)) {
        alert("Nama harus alfabet!");
    }
    else if (!regexTempatLahir.test(tempatLahir)) {
        alert("Tempat lahir harus alfabet!");
    }
    else if (
        !regexAlamat.test(alamat) || !regexNama.test(provinsi) || !regexNama.test(kecamatan) || !regexNama.test(kelurahan) ||
        !regexNumerik.test(rt) || !regexNumerik.test(rw)
    ) {
        alert("Data alamat salah");
    }
    else if (!regexNumerik.test(noTelepon)) {
        alert("Nomor telepon hanya boleh numerik");
    }
    else if (!regexNumerik.test(kodePos)) {
        alert("Kode pos hanya boleh numerik");
    }
    else if (!regexAlphaNumerik.test(pendidikanTerakhir)) {
        alert("Data pendidikan terakhir salah");
    }
    else if (!regexAlphaNumerik.test(pekerjaan)) {
        alert("Data Pekerjaan salah");
    }
    else if (!regexNama.test(hubunganDenganPasien)) {
        alert("Data hubungan dengan pasien salah");
    }
    else if (!regexNama.test(namaPenanggungJawab)) {
        alert("Data nama penanggung jawab salah");
    }
    else if (!regexAlphaNumerik.test(pendidikanPenanggungJawab)) {
        alert("Data pendidikan terakhir salah");
    }
    else if (!regexAlphaNumerik.test(pekerjaanPenanggungJawab)) {
        alert("Data pekerjaan penanggung jawab salah");
    }
    else {
        alert("Pendaftaran berhasil");
    }
}