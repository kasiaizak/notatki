# Embed i polskie znaki

Lekarstwo na brak polskich znaków w osadzanych treściach `<embed>` na **WordPress**. ;-)

```php
function fix_wp_embed_charset(){
    ?><meta charset="<?php bloginfo( 'charset' ) ?>"><?php
}
add_action('embed_head', 'fix_wp_embed_charset');
```

Funkcję dodajemy w pliku _functions.php_ motywu potomnego.
