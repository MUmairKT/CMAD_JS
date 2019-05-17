var stdary = [];
function stdobj(name, age, cell, email) {
    this.stdName = name;
    this.stdAge = age;
    this.stdCell = cell;
    this.stdEmail = email;
    this.stdid = Date.now();
}

function loadstudent() {
    var tbl = document.getElementById("tblStdRecord");
    tbl.innerHTML = "";
    for (var i = 0; i < aryobj.length; i++) {

        // creating table Row
        var trow = document.createElement('tr');
        trow.setAttribute('id', "row" + i);
        trow.setAttribute('class', 'whiteRowColor');

        // Creating columns in Row for Name, Class and Buttons
        var tdstdname = document.createElement('td');
        var tdstdclass = document.createElement('td');
        var tdbtn = document.createElement('td');

        // creating row field Name textbox 
        var txtStdname = document.createElement('input');
        txtStdname.type = "text";
        txtStdname.value = aryobj[i].sname;  // assign value from object to table field
        txtStdname.disabled = true;
        txtStdname.id = "name" + i;

        // creating row field Class textbox 
        var txtStdclass = document.createElement('input');
        txtStdclass.type = "text";
        txtStdclass.value = aryobj[i].sclass; // assign value from object to table field
        txtStdclass.disabled = true;
        txtStdclass.id = "class" + i;

        // Creating Edit Button
        var btnedit = document.createElement('button');
        btnedit.id = "btnEdit" + i;
        btnedit.setAttribute('data-id', i);
        btnedit.innerHTML = "Edit  ";
        btnedit.onclick = function () {
            editrec(this.getAttribute('data-id'));
        }

        // Creating Delete Button
        var btndel = document.createElement('button');
        btndel.id = "btnDel" + i;
        btndel.innerHTML = "Delete";
        btndel.setAttribute('data-id', i);
        btndel.onclick = function () {
            delrec(this.getAttribute('data-id'));
        };
        // creating parent child nodes of Record table
        tdstdname.appendChild(txtStdname);
        tdstdclass.appendChild(txtStdclass);
        tdbtn.appendChild(btndel);
        tdbtn.appendChild(btnedit);
        trow.appendChild(tdstdname);
        trow.appendChild(tdstdclass);
        trow.appendChild(tdbtn);
        tbl.appendChild(trow);
    }
}

// Add Record Method
function addrec(stdName, stdAge, stdCell, stdEmail) {
    var id;
//    localStorage.clear();
    //stdary.push(new stdobj(stdName.value, stdAge.value, stdCell.value, stdEmail.value));
    if (localStorage.getItem(localStorage.key(0)) == null) {
        id = 0;
    }
    else
    {
        id =localStorage.key(localStorage.length-1);
        id = Number(id)+1;
    }
    localStorage.setItem(id, JSON.stringify(new stdobj(stdName.value, stdAge.value, stdCell.value, stdEmail.value)));
    stdName.value = '';
    stdAge.value = '';
    stdCell.value = '';
    stdEmail.value = '';
}

// Delete record method
function delrec(indexid) {
    var btnDel = document.getElementById('btnDel' + indexid);
    var btnEdit = document.getElementById('btnEdit' + indexid);
    var row = document.getElementById('row' + indexid);
    var txtName = document.getElementById('name' + indexid);
    var txtClass = document.getElementById('class' + indexid);

    // make fields editable
    if (btnDel.innerHTML == "Delete") {
        aryobj.splice(indexid, 1);
        loadstudent();
    }
    else {
        document.getElementById('name' + indexid).disabled = true;
        document.getElementById('class' + indexid).disabled = true;
        btnEdit.innerHTML = "Edit";
        btnDel.innerHTML = "Delete";
        txtName.value = aryobj[indexid].sname;
        txtClass.value = aryobj[indexid].sclass;
        row.setAttribute('class', "whiteRowColor");
    }
}

// Edit record Method
function editrec(rowid) {

    var btnDel = document.getElementById('btnDel' + rowid);
    var btnEdit = document.getElementById('btnEdit' + rowid);
    var row = document.getElementById('row' + rowid);
    var txtName = document.getElementById('name' + rowid);
    var txtClass = document.getElementById('class' + rowid);

    // make fields editable 
    if (btnEdit.innerHTML != "Update") {
        txtName.disabled = false;
        txtClass.disabled = false;
        btnEdit.innerHTML = "Update";
        btnDel.innerHTML = "cancel";
        row.setAttribute('class', "blueRowColor");
    }
    else {
        txtName.disabled = true;
        txtClass.disabled = true;
        btnEdit.innerHTML = "Edit";
        btnDel.innerHTML = "Delete";
        row.setAttribute('class', "whiteRowColor");
        aryobj[rowid].sname = txtName.value;
        aryobj[rowid].sclass = txtClass.value;
    }
}
