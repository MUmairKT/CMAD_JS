var aryobj = [];
editid = -1;
function loadstudent() {
    var tbl = document.getElementById("tblStdRecord");
    tbl.innerHTML = "";
    for (var i = 0; i < aryobj.length; i++) {
        var trow = document.createElement('tr');

        var tdstdname = document.createElement('td');
        var tdstdclass = document.createElement('td');
        var tddelbtn = document.createElement('td');
        var txtStdname = document.createTextNode(aryobj[i].sname);
        var txtStdclass = document.createTextNode(aryobj[i].sclass);
        var btndel = document.createElement('button');
        trow.setAttribute('id', "r" + i);
        trow.setAttribute('data-id', i);
        trow.setAttribute('class', 'whiteRowColor');
        trow.onclick = function () {
            loadrec(this.getAttribute('data-id'));
        }
        btndel.innerHTML = "Delete";
        btndel.setAttribute('data-id', i);
        btndel.onclick = function () {
            delrec(this.getAttribute('data-id'));
        };
        tdstdname.appendChild(txtStdname);
        tdstdclass.appendChild(txtStdclass);
        tddelbtn.appendChild(btndel);
        trow.appendChild(tdstdname);
        trow.appendChild(tdstdclass);
        trow.appendChild(tddelbtn);
        tbl.appendChild(trow);
    }
}
function addrec(stdname, stdclass) {
    aryobj.push({ sname:stdname.value,sclass:stdclass.value });
    stdname.value = '';
    stdclass.value = '';
    loadstudent();
}
function delrec(indexid) {
    aryobj.splice(indexid, 1);
    loadstudent();
}
function loadrec(rowid) {
    //trow.childNodes.getElementById()
    document.getElementById('stdname').value = aryobj[rowid].sname;
    document.getElementById('stdclass').value = aryobj[rowid].sclass;
    editid = rowid;
    for (var i = 0; i < aryobj.length; i++) {
        document.getElementById('r' + i).setAttribute('class', "whiteRowColor");
    }

    document.getElementById('r' + rowid).setAttribute('class', "blueRowColor");
}
function editrec(stdname, stdclass) {
    aryobj[editid].sname = stdname.value;
    aryobj[editid].sclass = stdclass.value;
    stdname.value = '';
    stdclass.value = '';
    loadstudent();
    for (var i = 0; i < document.getElementById(rowid).getElementsByTagName('td').length; i++) {
        document.getElementById('tblStdRecord').getElementsByTagName('td')[i].setAttribute('class', "whiteRowColor");
    }
}