function FilterFaculty() {
    var input, filter, table, tr, td, i, txtValue;

   var input = document.getElementById('filtfaculty');
    filter = input.value.toUpperCase();
    table = document.getElementById("students");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("fakultas")[0];
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

function FilterStudy() {
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById('filtprodi');
    filter = input.value.toUpperCase();
    table = document.getElementById("students");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("study")[0];
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

var form = document.getElementById("add-student-form");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);