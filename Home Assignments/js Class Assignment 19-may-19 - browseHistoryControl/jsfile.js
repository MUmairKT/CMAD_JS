function pageobj(pagetitle, pageurl, datetime, id) {
    this.pgTitle = pagetitle;
    this.pgUrl = pageurl;
    this.pgDatetime = datetime;
    this.pgid = id;
}

// --------------------------------  View Record  -----------------------------
// load records in table
function viewRec(pgurl) {
    var pagename = pgurl.substring(pgurl.lastIndexOf('/') + 1);
    var nav = document.getElementById("nav");
    var navclass = "";
    nav.innerHTML = '';
    for (var i = 1; i <= 10; i++) {
        if (pagename == "page" + i + ".html") {
            navclass = "nav-link active";
        }
        else {
            navclass = "nav-link";
        }
        nav.innerHTML += `<li id="page${i}"class="${navclass}"><a class="nav-link text-primary pl-3 pr-3" href="page${i}.html">Page ${i}</a></li> `
    }    
    var tbl = document.getElementById("tblPgRecord");
    var dt = "";
    var i = 1;    
    key = localStorage.getItem("cp");
    dt = `
    
    <table border="1" class="table text-center table-striped">
    <thead>
        <tr scope="row">
            <th scope="col">
                <h4>DateTime</h4>
            </th>
            <th scope="col">
                <h4>PageTitle</h4>
            </th>
            <th scope="col">
                <h4>PageUrl</h4>
            </th>
        </tr>
    </thead>    
    <tbody> `
    for (var i = key - 1; i > 0; i--) {
        if (localStorage.hasOwnProperty(i) && i != 'cp') {
            var temp = JSON.parse(localStorage.getItem(i));
            dt += `<tr><td style="width: 25%"> ${temp.pgDatetime}</td><td style="width: 30%">${temp.pgTitle}</td><td>${temp.pgUrl}</td></tr>
        `;
            // i++;
        }
        dt += `</tbody>`
    }
    tbl.innerHTML = dt;
    document.getElementById("buttons").innerHTML = ` <input type="button" value="Back" class="btn btn-success" onclick="window.history.back()" />
    <input type="button" value="Forward" class="btn btn-success" onclick="window.history.forward()" />`
}



// --------------------------------  Add Record --------------------------------
function showHistory(btn, historytbl) {
    if (historytbl.style.display == "block") {
        historytbl.style.display = "none";
        btn.value = "Show History";
    }
    else {
        historytbl.style.display = "block";
        btn.value = "Hide History";
    }


}
// Add Record Method
function addrec(pgname, pgurl, pgdatetime) {
    var id;
    var pgurl = pgurl.substring(pgurl.lastIndexOf('/') + 1);
    //    localStorage.clear();
    //stdary.push(new stdobj(stdName.value, stdAge.value, stdCell.value, stdEmail.value));
    if (localStorage.getItem('cp') == null) {
        id = 1;
        localStorage.setItem('cp', JSON.stringify(id));
        localStorage.setItem(id, JSON.stringify(new pageobj(pgname, pgurl, pgdatetime, id)));
    }
    else {
        id = JSON.parse(localStorage.getItem('cp'));
        id = Number(id) + 1;
        var temp = JSON.parse(localStorage.getItem(id - 1));
        if (temp.pgUrl != pgurl) {
            localStorage.setItem('cp', JSON.stringify(id));
            localStorage.setItem(id, JSON.stringify(new pageobj(pgname, pgurl, pgdatetime, id)));
        }
    }
    viewRec(pgurl);

}



