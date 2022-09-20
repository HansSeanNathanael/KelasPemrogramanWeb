let selectProvinsi = document.getElementById("select-provinsi");
let selectKotaKabupaten = document.getElementById("select-kota-kabupaten");
let selectKecamatan = document.getElementById("select-kecamatan");
let selectKelurahan = document.getElementById("select-kelurahan");
let kodePos = document.getElementById("result-postal-code-text");

let daftarKelurahan = {};
let daftarKecamatan = []

function convertToArray(json) {
    let result = [];

    let i = 0;
    for (let key in json) {
        result[i++] = [json[key], key];
    }

    return result;
}

function deleteOption(select) {
    while (select.firstChild) {
        select.removeChild(select.lastChild);
    }
}

async function getProvinsi() {
    let dataProvinsi = await fetch("https://kodepos-2d475.firebaseio.com/list_propinsi.json?print=pretty");
    let dictionaryDataProvinsi = await dataProvinsi.json();

    let daftarProvinsi = convertToArray(dictionaryDataProvinsi);
    daftarProvinsi.sort();

    return daftarProvinsi;
}

async function getKotaKabupaten(id) {
    let dataKotaKabupaten = await fetch("https://kodepos-2d475.firebaseio.com/list_kotakab/" + id + ".json?print=pretty");
    let dictionaryDataKotaKabupaten = await dataKotaKabupaten.json();

    daftarKotaKabupaten = convertToArray(dictionaryDataKotaKabupaten);
    daftarKotaKabupaten.sort();

    return daftarKotaKabupaten;
}

async function getKecamatanKelurahan(id) {
    daftarKecamatan = [];

    let dataKecamatanKelurahanKodePos = await fetch("https://kodepos-2d475.firebaseio.com/kota_kab/" + id + ".json?print=pretty");
    let dictionaryDataKecamatanKelurahan = await dataKecamatanKelurahanKodePos.json();

    let kecamatan = [];
    for (let i = 0; i < dictionaryDataKecamatanKelurahan.length; i++) {
        kecamatan.push(dictionaryDataKecamatanKelurahan[i]["kecamatan"]);
    }
    daftarKecamatan = [...new Set(kecamatan)];
    
    daftarKelurahan = {};
    for (let i = 0; i < dictionaryDataKecamatanKelurahan.length; i++) {
        if (!daftarKelurahan.hasOwnProperty(dictionaryDataKecamatanKelurahan[i]["kecamatan"])) {
            daftarKelurahan[dictionaryDataKecamatanKelurahan[i]["kecamatan"]] = [];
        }
        daftarKelurahan[dictionaryDataKecamatanKelurahan[i]["kecamatan"]].push([dictionaryDataKecamatanKelurahan[i]["kelurahan"], dictionaryDataKecamatanKelurahan[i]["kodepos"]])
    }

    for (let i = 0; i < daftarKecamatan.length; i++) {
        daftarKelurahan[daftarKecamatan[i]].sort();
    }

    daftarKecamatan.sort();
}

function deletePilihanKotaKabupaten() {
    deleteOption(selectKotaKabupaten);
    deletePilihanKecamatan();
}

function deletePilihanKecamatan() {
    deleteOption(selectKecamatan);
    deletePilihanKelurahan();
}

function deletePilihanKelurahan() {
    deleteOption(selectKelurahan);
}



async function loadProvinsi() {
    let daftarProvinsi = await getProvinsi();
    deleteOption(selectProvinsi);
    
    for (let i = 0; i < daftarProvinsi.length; i++) {
        let newOption = document.createElement("option");
        newOption.value = daftarProvinsi[i][1];
        newOption.text = daftarProvinsi[i][0];
        selectProvinsi.appendChild(newOption);
    }
    selectProvinsi.value = daftarProvinsi[0][1];

    loadKabupatenKota(selectProvinsi.value);
}

async function loadKabupatenKota(id) {
    deletePilihanKotaKabupaten();
    let dataKotaKabupaten = await getKotaKabupaten(id);
    
    for (let i = 0; i < dataKotaKabupaten.length; i++) {
        let newOption = document.createElement("option");
        newOption.value = dataKotaKabupaten[i][1];
        newOption.text = dataKotaKabupaten[i][0];
        selectKotaKabupaten.appendChild(newOption);
    }
    selectKotaKabupaten.value = dataKotaKabupaten[0][1];

    loadKecamatan(selectKotaKabupaten.value);
}

async function loadKecamatan(id) {
    deletePilihanKecamatan();
    await getKecamatanKelurahan(id);
    
    for (let i = 0; i < daftarKecamatan.length; i++) {
        let newOption = document.createElement("option");
        newOption.value = daftarKecamatan[i];
        newOption.text = daftarKecamatan[i];
        selectKecamatan.appendChild(newOption);
    }
    selectKecamatan.value = daftarKecamatan[0];

    loadKelurahan(selectKecamatan.value);
}

async function loadKelurahan(kecamatan) {
    deletePilihanKelurahan();
    
    for (let i = 0; i < daftarKelurahan[kecamatan].length; i++) {
        let newOption = document.createElement("option");
        newOption.value = daftarKelurahan[kecamatan][i][1];
        newOption.text = daftarKelurahan[kecamatan][i][0];
        selectKelurahan.appendChild(newOption);
    }

    selectKelurahan.value = daftarKelurahan[kecamatan][0][1];
    tampilkanKodePos(selectKelurahan.value);
}


function tampilkanKodePos(kode) {
    kodePos.innerHTML = kode;
}

loadProvinsi();