var btnconectar = document.getElementById("btnCarga");
btnconectar.addEventListener("click", function () {
    axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        .then(function (rs) {
            let json = rs.data;
            let lista = document.getElementById("personas");
            for (var i in json) {
                let li = document.createElement("li");
                li.innerHTML = json[i].name + " vive en " + json[i].city + "<br>";
                lista.appendChild(li);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}, true);