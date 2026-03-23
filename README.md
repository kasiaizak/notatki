# 👋 Witaj na stronie dev.kasiaizak.pl

**dev.kasiaizak.pl** (dawniej **_Frontendowe notatki_**) to moje materiały zbierane podczas nauki frontendu 👩‍💻, a także podczas aktualnej pracy na stanowisku **Frontend Developera / WordPress Admina**. 😁💪 Czemu w takiej formie? Wybrane narzędzie oferuje łatwą implementację kolorowania składni 🌈, na czym mi najbardziej zależało - screenshoty 📷 są przereklamowane - fajne, ale nie skopiujesz z nich łatwo kodu... 🤯 Gotowe serwisy oferujące podobną funkcjonalność mają swoje ograniczenia ⛔, a tu _Wolność Tomku w swoim domku_. 🤸‍♀️🏡 Z drugiej strony stworzenie tego projektu w oparciu o czysty HTML i CSS jest oczywiście możliwe, ale byłoby zdecydowanie bardziej pracochłonne 🙄, a chyba każdy się zgodzi, że nie o to chodzi przy robieniu notatek... 😏 Ma być szybko 🚀 i prosto 👶 - moim zdaniem cel został osiągnięty. 👌😍

A teraz parafrazując cytat _prof. Jana Miodka_ o materiałach tu zawartych...

> _Teoria: jest wtedy, kiedy wiemy wszystko, a nic nie działa!_ 🧐⛔
>
> _Praktyka: jest wtedy, kiedy wszystko działa, a nikt nie wie dlaczego._ 👌🤔
>
> _Tutaj łączę teorię z praktyką - nic nie działa i nikt nie wie dlaczego..._ 🤦‍♀️😱

## 🏠 Strona domowa

[dev.kasiaizak.pl](http://dev.kasiaizak.pl/)

## 🖥️ Instalacja lokalna

Projekt możesz w łatwy sposób postawić u siebie lokalnie klonując to repozytorium (jeśli korzystasz już z [systemu kontroli wersji git](https://git-scm.com/)):

```bash
git clone https://github.com/kasiaizak/notatki.git
```

lub po prostu pobierając paczkę ZIP z [repozytorium](https://github.com/kasiaizak/notatki):

![Repo](https://dev.kasiaizak.pl/_media/repo.jpg)

### 🧐 Podgląd strony na żywo

Projekt ma wbudowaną funkcjonalność _Podglądu na żywo_, wymaga to jednak instalacji (najlepiej globalnie) pakietu `docsify-cli`. Niektóre edytory kodu oferują też taką funkcjonalność, np. [Visual Studio Code](https://code.visualstudio.com/) + rozszerzenie [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), więc jeśli korzystasz z takiego rozwiązania, to możesz pominąć ten krok i przejść do kolejnej sekcji. 😉

By korzystać z [pakietów npm](https://www.npmjs.com/) potrzebny jest *Node.js*. Jeśli nie masz jeszcze zainstalowanego Node.js to nic straconego... 😄 Tu znajduje się instalka i można szybko to nadrobić: [oficjalna strona Node.js](https://nodejs.org/en/).

```bash
npm i docsify-cli -g
```

Uruchamiając serwer lokalnie można podglądać zmiany strony na żywo pod adresem
<http://localhost:3000>, by to zrobić wpisujemy w konsoli:

```bash
docsify serve
```

- Więcej przykładów użycia pakietu `docsify-cli` można znaleźć na stronie [github.com/docsifyjs/docsify-cli](https://github.com/docsifyjs/docsify-cli)
- Aby zobaczyć inne niesamowite funkcje `docsify` zajrzyj na stronę [docsify.js.org](https://docsify.js.org/)

### ✏️ Edycja treści

- `index.html` - plik wejściowy
- `README.md` - strona główna
- `_sidebar.md` - pasek boczny
- `_coverpage.md` - strona tytułowa

## 🤝 Współtworzenie

- _Sforkuj_ repozytorium!
- Utwórz swoją gałąź z nową funkcjonalnością: `git checkout -b my-new-feature`
- Zakomentuj zmiany: `git commit -m 'Add some feature'`
- Wypchnij je na gałąź: `git push origin my-new-feature`
- Wyślij prośbę o wdrożenie zmian za pomocą *Pull request*.

Współtworzenie, zgłaszanie błędów i zapytania o nowe funkcjonalności są mile widziane!

- Nie krępuj się sprawdzić
[stronę zgłoszonych błędów](https://github.com/kasiaizak/notatki/issues).
- Zerknij również na [Kodeks Postępowania](WSPOLTWORZENIE.md).

### 🤔 Jak zacząć?

- Jeśli szukasz miejsca do modyfikacji, sprawdź strukturę plików.
- Jeśli chcesz dodać nowy plik, zrób to w odpowiedniej lokalizacji i dodaj również odniesienie w pliku `_sidebar.md`

## 👩‍💻 Autor - Kasia Izak

- Website: [www.kasiaizak.pl](https://www.kasiaizak.pl)
- Github: [@kasiaizak](https://github.com/kasiaizak)
- LinkedIn: [@katarzyna-izak](https://linkedin.com/in/katarzyna-izak)

## ⭐️ Okaż swoje wsparcie

Zostaw ⭐️ przy repozytorium na GitHubie, jeśli ten projekt Ci się spodobał!

## 📝 Licencja

Copyright © [Kasia Izak](https://github.com/kasiaizak).

This project is [MIT](LICENSE.md) licensed.

***
_To README zostało częściowo wygenerowane z ❤️ przez
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
