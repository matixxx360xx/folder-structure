# Folder Structure CLI

Prosty program konsolowy w **Node.js**, który pozwala tworzyć foldery i pliki z poziomu terminala.
Dzięki niemu możesz szybko wygenerować strukturę folderów i plików.

---

## Funkcje

* Tworzenie nowego folderu
* Dodawanie plików do wybranego folderu
* Wybór istniejącego folderu lub utworzenie nowego
* Obsługa błędów podczas tworzenia folderów i plików

---

## Instalacja i uruchomienie

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/twoj-login/folder-structure.git
   cd folder-structure
   npm install
   node index.js
   ```

---

## Jak używać

Po uruchomieniu zobaczysz menu:

```
1. Dodaj folder
2. Dodaj pliki
3. Wyjście
```

---

## Przykład działania

```
1. Dodaj folder
2. Dodaj pliki
3. Wyjscie
Wybierz opcje: 1
Dodaj nazwe folderu: test

1. Dodaj folder
2. Dodaj pliki
3. Wyjscie
Wybierz opcje: 2
Ile plików chcesz utworzyć? 2
Dodaj nazwe pliku: index.html
Dodaj nazwe pliku: style.css
```

Efekt:

```
test
 ├── index.html
 └── style.css
```

---

## Usprawnienia w toku

* Obsługa tworzenia wielu poziomów podfolderów od razu
* Możliwość wpisywania treści do plików podczas tworzenia
* Obsługa bardziej rozbudowanych struktur folderów
