function stdobj(name, age, cell, email, id) {
    this.stdName = name;
    this.stdAge = age;
    this.stdCell = cell;
    this.stdEmail = email;
    this.stdid = id;    
}

// --------------------------------  View Record Page  -----------------------------
function viewRecPage() {
    window.location.href = "index.html";
}

// load records in table
function viewRec() {
    var tbl = document.getElementById("tblStdRecord");
    var dt = "";
    var i = 1;
    //for (var i = 0; i < localStorage.length; i++) {
    for (var key in localStorage) {

        if (localStorage.hasOwnProperty(key) && key != 'mx' ) {
            var temp = JSON.parse(localStorage.getItem(key));
            dt += `<tr><td> ${i} </td><td contenteditable=true> ${temp.stdName}</td><td contenteditable=true>${temp.stdEmail}</td>
        <td><input type="button" value="View Detail" class="btn btn-info" onClick="viewDetailPage(${temp.stdid})"/></td>
        <td><input type="button" value="Delete" class="btn btn-danger" onClick="delrec(${temp.stdid})"/></td>
        </tr>
        `;
            i++;
        }
    }
    tbl.innerHTML = dt;
}
// Delete a record 
function delrec(key) {
    localStorage.removeItem(key);
    viewRecPage();
}

// --------------------------------  Add Record Page --------------------------------
function addRecPage() {
    window.location.href = "add.html";
}
// Add Record Method
function addrec(stdName, stdAge, stdCell, stdEmail) {
    var id;
    //    localStorage.clear();
    //stdary.push(new stdobj(stdName.value, stdAge.value, stdCell.value, stdEmail.value));
    if (localStorage.getItem('mx') == null) {
        id = 1;
    }
    else {
        id = JSON.parse(localStorage.getItem('mx'));
        id = Number(id) + 1;
    }
    localStorage.setItem('mx',JSON.stringify(id));
    localStorage.setItem(id, JSON.stringify(new stdobj(stdName.value, stdAge.value, stdCell.value, stdEmail.value, id)));
    stdName.value = '';
    stdAge.value = '';
    stdCell.value = '';
    stdEmail.value = '';
}


// --------------------------------- View Detail Page --------------------------------
function viewDetailPage(stdid) {
    window.location.href = "viewdetail.html#" + stdid;

}
// load view detail of selected record
function viewDetailRec(stdid) {
    stdid = stdid.replace('#', '');
    var dt = JSON.parse(localStorage.getItem(stdid));
    document.getElementById("redid").innerHTML = stdid;
    document.getElementById("stdName").value = dt.stdName;
    document.getElementById("stdAge").value = dt.stdAge;
    document.getElementById("stdCellNo").value = dt.stdCell;
    document.getElementById("stdEmail").value = dt.stdEmail;
}

// Edit selected record 
function editrec(key) {
    localStorage.setItem(key, JSON.stringify(new stdobj(document.getElementById("stdName").value,
        document.getElementById("stdAge").value, document.getElementById("stdCellNo").value, document.getElementById("stdEmail").value, document.getElementById("redid").innerHTML)));
    viewDetailRec(window.location.hash.replace('#', ''));
}
