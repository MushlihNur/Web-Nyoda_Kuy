function validateForm() {
    let name = document.forms["mesen"]["name"].value;
    let telp = document.forms["mesen"]["telp"].value;
    let jeruk = document.forms["mesen"]["jmlJeruk"].value;
    let melon = document.forms["mesen"]["jmlMelon"].value;
    let cara = document.forms["mesen"]["cara"].value;
    
    if ((name == "") || (telp == "") || (cara == "")) {
        alert("Harap lengkapi formulir pemesanan!");
    } else {
        if ((melon != "") || (jeruk != "")) {
            alert("Terima kasih telah memesan!")
        } else {
            alert("Mau mesen apa nihh??")
        }
    }
}