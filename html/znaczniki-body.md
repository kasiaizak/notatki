# Znaczniki w BODY

Większość znaczników posiada /domknięcie, chyba że zaznaczono inaczej w jego opisie, przykład takiego domknięcia:
```html
  <h1>To jest główny tytuł strony</h1>
```

Przedstawiony podział został oparty na oficjalnej dokumentacji organizacji W3C - [Table of Contents](https://www.w3.org/TR/html52/index.html#contents)

## Sekcje dokumentu

- `<header>` - nagłówek dokumentu / sekcji
- `<footer>` - stopka dokumentu / sekcji
- `<h1> - <h6>` - tekstowe nagłówki tytułowe dokumentu / sekcji (H1 jeden na całą stronę i powinien skrótowo, jak najlepiej opisać treść strony)
- `<section>` - sekcja dokumentu, służy do wydzielania treści na stronie. Może zawierać w sobie kolejne sekcje - każda z nich powinna zawierać kaskadowy (odpowiedni dla zagnieżdżenia) nagłówek H2-H6.
- `<article>` - znacznik określający jeden pełny artykuł na stronie, może być podzielony na sekcje
- `<nav>` - określa nawigację na stronie
- `<aside>` - wydziela tzw. pasek boczny z mniej istotną treścią strony


## Znaczniki "grupujące treść"

- `<main>` - główna część dokumentu - w przypadku tzw. *landingpage* `<header>` i `<footer>` mogą być zawarte w `<main>`, jeśli zaś witryna posiada podstrony to raczej umieszczane są one poza tym znacznikiem
- `<p>` - paragraf
- `<figure>`
- `<figcaption>`
- `<blockquote>`
- `<hr>` - nie posiada domknięcia
- `<address>`
- `<pre>`
- `<ol>` - lista numerowana
- `<ul>` - lista wypunktowana
- `<li>` - element listy
- `<dl>`
- `<dt>`
- `<dd>`
- `<div>`

## Znaczniki na poziomie tekstu

- `<a>`
- `<em>`
- `<strong>`
- `<small>`
- `<s>`
- `<cite>`
- `<q>`
- `<dfn>`
- `<abbr>`
- `<ruby>`
- `<rb>`
- `<rt>`
- `<rtc>`
- `<rp>`
- `<data>`
- `<time>`
- `<code>`
- `<var>`
- `<samp>`
- `<s>`
- `<kbd>`
- `<sub>` i `<sup>`
- `<i>`
- `<b>`
- `<u>`
- `<mark>`
- `<bdi>`
- `<bdo>`
- `<span>`
- `<br>`
- `<wbr>`

## Znaczniki edycji

- `<ins>`
- `<del>`

## Znaczniki wstawionej treści

- `<picture>`
- `<source>`
- `<img>`
- `<iframe>`
- `<embed>`
- `<object>`
- `<parm>`
- `<video>`
- `<audio>`
- `<track>`
- `<map>`
- `<area>`

## Tabele

- `<table>`
- `<caption>`
- `<colgroup>`
- `<col>`
- `<tbody>`
- `<thead>`
- `<tfoot>`
- `<tr>`
- `<td>`
- `<th>`

## Formularze

- `<form>`
- `<label>`
- `<input>`
- `<button>`
- `<select>`
- `<datalist>`
- `<optgroup>`
- `<option>`
- `<textarea>`
- `<output>`
- `<progress>`
- `<meter>`
- `<fieldset>`
- `<legend>`

## Elementy interaktywne

- `<details>`
- `<summary>`
- `<dialog>`

## Skrypty

- `<script>`
- `<noscript>`
- `<template>`
- `<canvas>`
