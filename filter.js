document.getElementById('buttonClick').addEventListener("click", function () {
    if (buttonClick.innerHTML == "Hide Form Add new Student") {
        buttonClick.innerHTML = "Show Form Add new Student";
    } else {
        buttonClick.innerHTML = "Hide Form Add new Student";
    }
});

function FacultyPilter() {
    var txtValue;
    var input = document.getElementById("Facultyplt");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("mahasiswa");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByClassName("fakultas")[0];
        if (td) {
            txtValue = td.textContent || td.innerText || td.value;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == "0") {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function ProdiPilter() {
    var txtValue;
    var input = document.getElementById("Prodiplt");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("mahasiswa");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByClassName("prodi")[0];
        if (td) {
            txtValue = td.textContent || td.innerText || td.value;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == "0") {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

var form = document.getElementById("FormMahasiswa");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

let selection = {
    "Akademi Sekretari Manajemen Indonesia Klabat": ["Sekretari (D3)"],
    "Fakultas Ekonomi dan Bisnis": ["Akuntansi", "Manajemen"],
    "Fakultas Filsafat": ["Ilmu Filsafat"],
    "Fakultas Ilmu Komputer": ["Informatika", "Sistem Informasi"],
    "Fakultas Keguruan dan Ilmu Pendidikan": [
        "Pendidikan Agama",
        "Pendidikan Bahasa Inggris",
        "Pendidikan Ekonomi",
        "Pendidikan Luar Sekolah",
    ],
    "Fakultas Keperawatan": ["Keperawatan", "Profesi Ners"],
    "Fakultas Pertanian": ["Agroteknologi"],
    "Pascasarjana": ["Magister Manajemen", "Magister Teologi"],
};

window.onload = function () {
    let faculty = document.getElementById("faculty");
    let program = document.getElementById("prodi");
    for (let x in selection) {
        faculty.options[faculty.options.length] = new Option(x, x);
    }
    faculty.onchange = function () {
        program.length = 1;
        let z = selection[this.value];
        for (let i = 0; i < z.length; i++) {
            program.options[program.options.length] = new Option(z[i], z[i]);
        }
    };
};