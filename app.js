const fs = require('fs');
const path = require("path");
const prompt = require('prompt-sync')();

class Folder{
dodajfoler(){
    fs.mkdirSync('nowy-folder');
}
}

function main(){
const folder = new Folder();





while(true){
    console.log("1. Dodaj folder\n2. Wyjscie");

    let option = prompt('Wybierz opcje: ');
    switch(option){
        case '1':
            folder.dodajfoler();
        case '2':
            return;
    }
}
}

main()
