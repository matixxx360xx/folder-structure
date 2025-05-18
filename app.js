const fs = require('fs');
const path = require("path");
const prompt = require('prompt-sync')();

class Folder{
    constructor(){
        this.nazwaFolderu = '';
    }
dodajFolder(){
    this.nazwaFolderu = prompt('Dodaj nazwe folderu: ');
    try{
    fs.mkdirSync(`${this.nazwaFolderu}`);
    }catch(err){
        console.log("Błąd podczas tworzenia folderu");
    }
}

dodajPliki(){
    const ilePlikow = parseInt(prompt('Ile plików chcesz utworzyć?'));
    for(let i = 0; i < ilePlikow; i++){
        let nazwaPliku = prompt('Dodaj nazwe pliku: ');
        try{
        fs.writeFileSync(path.join(this.nazwaFolderu, nazwaPliku), '');
        }catch(err){
            console.log("Błąd podczas tworzenia pliku");
        }
    }
}
}

function main(){
const folder = new Folder();


while(true){
    console.log("1. Dodaj folder \n2. Dodaj pliki \n3. Wyjscie");

    let option = prompt('Wybierz opcje: ');
    switch(option){
        case '1':
            folder.dodajFolder();
            break;
        case '2':
            folder.dodajPliki();
            break;
        case '3':
            return;
        default:
            console.log("wybierz opcje od 1 do 3");
            continue;
    }
}
}

main()
