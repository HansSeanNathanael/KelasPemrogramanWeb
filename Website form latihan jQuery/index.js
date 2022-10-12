$(document).ready(function() {

    $("#form-mahasiswa").validate({
        rules: {
            nrp: {
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            tanggallahir: {
                indonesianDate: true
            },
            umur: {
                digits: true,
                range: [0, 100]
            },
            email: {
                email: true
            },
            ulangipassword: {
                equalTo: "#password"
            }
        },
        messages: {
            nrp: {
                required: "Kolom ini harus diisi",
                minlength: "Panjang NRP adalah 10 digit",
                maxlength: "Panjang NRP adalah 10 digit",
            },
            nama: {
                required: "Kolom ini harus diisi"
            },
            alamat: {
                required: "Kolom ini harus diisi"
            },
            tanggallahir: {
                required: "Kolom ini harus diisi"
            },
            umur: {
                required: "Kolom ini harus diisi"
            },
            email: {
                required: "Kolom ini harus diisi",
                email: "Format email tidak valid"
            },
            situs: {
                required: "Kolom ini harus diisi"
            },
            password: {
                required: "Kolom ini harus diisi"
            },
            ulangipassword: {
                required: "Kolom ini harus diisi",
                equalTo: "Password tidak sama"
            }
        }
    });
});

$.validator.addMethod("indonesianDate", function(value, element) {
		return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
	},
	"Masukkan dalam format DD/MM/YYYY"
);

$.validator.addMethod("email", function(value, element) {
		return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
	},
	"Format email tidak valid"
);