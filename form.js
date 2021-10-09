// Tabel 
var dataMahasiswa = [
	{
		nim: 1050220100039,
		fullName: 'Vina Shampoo',
		gender: 'Female',
		fakultas: 'FIK',
		prodi: 'Informatika',
	},
	{
		nim: 1030218100040,
		fullName: 'Doni SmartDoor',
		gender: 'Male',
		fakultas: 'FIK',
		prodi: 'Sistem Informasi',
	},
	{

		nim: 1050218100041,
		fullName: 'Hengki Holder',
		gender: 'Male',
		fakultas: 'FEB',
		prodi: 'Akuntansi',
	}
]

// Input Tabel
const tmblSbmit = document.querySelector("#buttonApakek");

tmblSbmit.addEventListener('click', () => {
    let tambah_nim = document.querySelector("#nim").value;
    let tambah_nama = document.querySelector("#nama").value;
    let tambah_gender = document.querySelector('input#pria').checked;
    if (tambah_gender == true) {
        tambah_gender = 'Male';
    } else {
        tambah_gender = 'Female';
    }

    let tambah_faculty = document.querySelector("#faculty").options[document.querySelector("#faculty").selectedIndex].value;
    let tambah_program_study = document.querySelector("#prodi").options[document.querySelector("#prodi").selectedIndex].value;;

 
    if (/^\d+$/.test(tambah_nim) != true) {
        alert("StudentNim : ERROR🚨");
        return;
    }

    if (/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(tambah_nama) != true) {
        alert("StudentName : ERROR🚨");
        return;
    }

    if (tambah_faculty == '-- SELECT FACULTY --') {
        alert("Faculty : ERROR🚨");
        return;
    }

    if (tambah_program_study == '-- SELECT PROGRAM OF STUDY --') {
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
        gender: tambah_gender,
        fakultas: tambah_faculty,
        study: tambah_program_study,
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

        //action, #delete, 
        let action = document.createElement("td");
        let trash_icon = `<button type="button" onclick="delete_row(this)" class="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>`
        action.innerHTML = trash_icon;
        tr.appendChild(action);

        dftrMahasiswa.appendChild(tr);
    }
}
loadDataMahasiswa();

// Hapus
function delete_row(btn) {
    var row = btn.closest('tr').rowIndex - 1;
    const confirm_delete = confirm("Are You Sure To Delete?");
    if (confirm_delete == true) {
        dataMahasiswa.splice(row, 1);
    }
    loadDataMahasiswa();
}