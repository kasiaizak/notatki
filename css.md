# CSS

**CSS** to skrót z ang. *Cascading Style Sheets*, w polskim tłumaczeniu: kaskadowe arkusze stylów.

Reguły CSS odpowiadają za prezentację wizualną na stronie - wpływają na wygląd elementów HTML na ekranie, wydrukach itp.

CSS można umieszczać w sekcji `<head>` w znacznikach `<style>`, bezpośrednio w znaczniku HTML (np. `<span style="">`), ale najczytelniejsze jest umieszczenie ich w oddzielnym pliku `.css` i importowanie w `<head>` za pomocą znacznika `<link>` (patrz [Znaczniki w HEAD](html/znaczniki-head.md?id=link))

## Reguły CSS

Składnia CSS to tzw. reguły

```css
  selektor { właściwość: wartość; }
```
