# HTML

**HTML** to skrót z ang. *HyperText Markup Language*, w polskim tłumaczeniu: hipertekstowy język znaczników.

HTML opakowuje i opisuje treść (warstwę 0) strony - mówi przeglądarce o strukturze dokumentu i o znaczeniu treści na stronie (semantyka). Treść to wszystko co jest nośnikiem informacji: teksty, nagłówki, linki, listy, definicje, obrazki, video, formularze, itd.

**HTML** posiada swoją zdefiniowaną składnię i *nie jest językiem programowania* - **jest językiem znaczników**.

Pliki mają rozszerzenie: `.html`

## Struktura pliku HTML

### Szkielet strony internetowej

Na początku dokumentu deklarujemy w jakiej wersji języka HTML będziemy pisać, np. `<!DOCTYPE html>` - w tym przypadku jest to HTML 5. Znacznik ten jest wymagany.

Następnie cała treść jest opakowana w znacznik `<html>`, w którego skład wchodzą kolejne dwa:

- `<head>`, czyli "głowa" dokumentu, odpowiedzialna m.in. za tytuł i ikonę w pasku zakładek, kodowanie znaków i wiele, wiele więcej... oraz
- `<body>`, najprościej mówiąc "ciało" dokumentu, czyli to co rzeczywiście widzimy na stronie.

Warto wiedzieć, że znacznik `<head>` nie jest wymagany - strona internetowa może istnieć bez niego, ale w praktyce każda strona go zawiera.

Nie można również zapomnieć o zdefiniowaniu w jakim języku będzie pisana treść strony - *`lang="kod_kraju"`*.

```html
  <!DOCTYPE html>
  <html lang="pl">
    <head>
        Głowa dokumentu
    </head>

    <body>
        Ciało dokumentu
    </body>
  </html>
```

### Znaczniki i ich bdowa

Znaczniki treści nadają jej sens i ważność.

```html
  <znacznik atrybut="wartość">treść</znacznik>
```

Atrybuty nie zawsze są wymagane, a niektóre znaczniki nie mają /zamknięcia.

## Linkowanie do plików

Jak już wiemy z modułu podstawowego omawiającego [budowę strony internetowej](podstawy.md) - strony zazwyczaj opierają się na odpowiedniej strukturze plików i katalogów. Nie jest to kluczowe dla odbiorcy strony, ale zdecydowanie pomaga jej autorowi. Taka drzewiasta budowa wymaga jednak umiejętnego poruszania się po plikach podczas linkowania do odpowiednich materiałów.

Weźmy ponownie naszą przykładową stronę:

![File structure](../_media/basic/file-structure.jpg)

Jeśli chcemy podlinkować obrazek z folderu **assets/img** na stronie głównej _index.html_, to najpierw wejdziemy do odpowiednich katalogów, a następnie wybierzemy plik:

- `assets/img/image.jpg` lub
- `./assets/img/image.jpg`, gdzie pojedyncza kropka symbolizuje bieżący folder
- uważać za to należy na ścieżkę `/assets/img/image.jpg`, czyli rozpoczynającą się od samego znaku / - idzie ona na sam początek adresu. Będzie działało lokalnie, ale w pewnych przypadkach na serwerze plik może nie być poprawnie linkowany i zależy to od struktury katalogów. Jeśli np. stawiamy stronę pod domeną główną _strona.pl_ to zadziała, ale jeśli ma być to oddzielna strona w podkatalogu, np. _strona.pl/podstrona/_ to zamiast otrzymać oczekiwanego linku do pliku w postaci: _strona.pl/podstrona/assets/img/image.jpg_ otrzymamy _strona.pl/assets/img/image.jpg_ i obrazek się nie wyświetli...

By ten sam obrazek podlinkować na podstronie _site-one.html_, która znajduje się w folderze **sites**, najpierw musimy wyjść z tego katalogu, by ponownie wejść w ścieżkę obrazka:

`../assets/img/image.jpg`
