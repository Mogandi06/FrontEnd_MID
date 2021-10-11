// Tabel
var dataMahasiswa = [{
        nim: 1050220100039,
        fullName: "Vina Shampoo",
        gender: "Female",
        fakultas: "FIK",
        prodi: "Informatika",
    },
    {
        nim: 1030218100040,
        fullName: "Doni SmartDoor",
        gender: "Male",
        fakultas: "FIK",
        prodi: "Sistem Informasi",
    },
    {
        nim: 1050218100041,
        fullName: "Hengki Holder",
        gender: "Male",
        fakultas: "FEB",
        prodi: "Akuntansi",
    },
];

// Input Tabel
const tmblSbmit = document.querySelector("#buttonApakek");

tmblSbmit.addEventListener("click", () => {
    let tambah_nim = document.querySelector("#nim").value;
    let tambah_nama = document.querySelector("#nama").value;
    let pilih_gender = document.querySelector("input#pria").checked;
    let pilih_genderP = document.querySelector("input#wanita").checked;

    if (pilih_gender == true) {
        pilih_gender = "Male";
    }

    if (pilih_genderP == true) {
        pilih_gender = "Female";
    }


    let pilih_faculty = document.querySelector("#faculty").options[
        document.querySelector("#faculty").selectedIndex].value;
    if (pilih_faculty == 'Akademi Sekretari Manajemen Indonesia Klabat') {
        pilih_faculty = 'ASMIK';
    }
    if (pilih_faculty == 'Fakultas Ekonomi dan Bisnis') {
        pilih_faculty = 'FEB';
    }
    if (pilih_faculty == 'Fakultas Filsafat') {
        pilih_faculty = 'FIL';
    }
    if (pilih_faculty == 'Fakultas Ilmu Komputer') {
        pilih_faculty = 'FIK';
    }
    if (pilih_faculty == 'Fakultas Keguruan dan Ilmu Pendidikan') {
        pilih_faculty = 'FKIP';
    }
    if (pilih_faculty == 'Fakultas Keperawatan') {
        pilih_faculty = 'FKEP';
    }
    if (pilih_faculty == 'Fakultas Pertanian') {
        pilih_faculty = 'PERTANIAN';
    }
    if (pilih_faculty == 'Pascasarjana') {
        pilih_faculty = 'PASCASARJANA';
    }
    if (pilih_faculty == '--SELECT FACULTY--') {
        pilih_faculty = 'error Nih';
    }
    let pilih_prodi =
        document.querySelector("#prodi").options[
            document.querySelector("#prodi").selectedIndex
        ].value;

    if (/^\d+$/.test(tambah_nim) != true) {
        alert("StudentNim : ERROR🚨");
        return;
    }
    if (/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(tambah_nama) != true) {
        alert("StudentName : ERROR🚨");
        return;
    }

    if (pilih_gender == '' && pilih_genderP == '') {
        alert("Gender  : ERRORnoInput🚨");
        return;
    }

    if (document.querySelector("#faculty").selectedIndex < 1) {
        alert("Faculty : ERROR🚨");
        return;
    }

    if (document.querySelector("#prodi").selectedIndex < 1) {
        alert("Program Study : ERROR🚨");
        return;
    }
    if (dataMahasiswa.map((s) => s.nim).includes(tambah_nim) == true) {
        alert(`DOUBLE NIM: ERROR🚨`);
        return;
    }





    dataMahasiswa.push({
        nim: tambah_nim,
        nama: tambah_nama,
        gender: pilih_gender,
        fakultas: pilih_faculty,
        study: pilih_prodi,
    });

    alert(`${tambah_nama} added.`);
    loadDataMahasiswa();
    document.querySelector("form").reset();
});

// Isi Tabel
const dftrMahasiswa = document.querySelector("#mahasiswa");

function loadDataMahasiswa() {
    dftrMahasiswa.innerHTML = "";

    for (student of dataMahasiswa) {
        let tr = document.createElement("tr");

        for (key in student) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(student[key]));
            td.className = [key];
            tr.appendChild(td);
        }

        let action = document.createElement("td");
        let trash_icon =
            '<button type="button"onClick="hapusBaris(this)" class="btn btn-outline-danger"><i class="bi bi-trash2"></i></button>';
        action.innerHTML = trash_icon;
        tr.appendChild(action);

        dftrMahasiswa.appendChild(tr);
    }
}
loadDataMahasiswa();

// Hapus
function hapusBaris(btn) {
    var row = btn.closest("tr").rowIndex - 1;
    const confirm_delete = confirm("Are You Sure To Delete?");
    if (confirm_delete == true) {
        dataMahasiswa.splice(row, 1);
    }
    loadDataMahasiswa();
}

//Search
const SearchNama = () => {
    let filter = document.getElementById('cariNama').value.toUpperCase();

    let Mytabel = document.getElementById('mahasiswa')

    let tr = Mytabel.getElementsByTagName('tr')

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByClassName('fullName')[0];

        if (td) {
            let textvalue = td.textContent || td.innerHTML || td.value;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";

            } else {
                tr[i].style.display = "none";
            }
        }
    }
}