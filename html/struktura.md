# Struktura pliku HTML

## Budowa znaczników

```html
  <znacznik atrybut="wartość">treść</znacznik>
```

Atrybuty nie zawsze są wymagane. Niektóre znaczniki nie mają /zamknięcia.

## Szkielet strony internetowej

Na początku dokumentu deklarujemy w jakiej wersji języka HTML będziemy pisać,
np. `<!DOCTYPE html>` - w tym przypadku jest to HTML 5. Znacznik ten jest
wymagany.

Następnie cała treść jest opakowana w znacznik `<html>`, w którego skład
wchodzą kolejne dwa:

- `<head>`, czyli "głowa" dokumentu, odpowiedzialna m.in. za tytuł i ikonę w
pasku zakładek, kodowanie znaków i wiele, wiele więcej... oraz
- `<body>`, najprościej mówiąc "ciało" dokumentu, czyli to co rzeczywiście
widzimy na stronie.

Warto wiedzieć, że znacznik `<head>` nie jest wymagany - strona internetowa
może istnieć bez niego, ale w praktyce każda strona go zawiera.

Nie można również zapomnieć o zdefiniowaniu w jakim języku będzie pisana treść
strony - *`lang="kod_kraju"`*.

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
