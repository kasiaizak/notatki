# Preloader

> Autor: Kasia Izak

Niniejszy preloader można obserwować na tej stronie.

## 1. Dodajemy plik loadera do projektu

U mnie będzie do plik o nazwie `loading.gif` umieszczony w katalogu `_media`.

![Preloader](../_media/loading.gif)

## 2. Osadzamy preloader na stronie

Bezpośrednio po tagu `<body>` dodajemy:

```html
<div id="preloader" class="preloader">
	<img class="loading-image" src="_media/loading.gif" alt="Loading..." />
</div>
```

## 3. Czas na style

Do arkuszy styli dodajemy (uwaga zapis w SASS):

```scss
#preloader {
  &.preloader {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 99;

    .loading-image {
        position: sticky;
        height: 10vh;
        transform: translateY(-50%);
        top: 50%;
        width: auto;
        z-index: 100;
    }
  }
}
```

## 4. Czas na skrypt

U mnie z wykorzystaniem biblioteki jQuery

```js
// Preloader
$(window).on('load', function() {
  // wait for page load PLUS one second
  setTimeout( removeLoader, 1000 );
});
function removeLoader() {
  $( "#preloader" ).fadeOut(500, function() {
    // fadeOut complete. Remove the preloader
    $( "#preloader" ).remove();
  });
}
```
