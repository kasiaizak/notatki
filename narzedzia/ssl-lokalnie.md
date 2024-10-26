# SSL lokalnie

Ponieważ aktualnie zawodowo działam głównie na *WordPressie*, to do pracy lokalnej używam programu [Local](https://localwp.com/) - jest bardzo intuicyjny i pozwala w szybki sposób korzystać z serwera PHP wraz z SSL.

Pozostawiam jednak te instrukcję, jeśli ktoś by potrzebował skonfigurować SSL korzystając z programu *Wampserver*.

## Konfiguracja SSL w *Wampserver* (w środowisku *Windows*)

### 1. Przygotowanie *Wampserver* (te kroki wykonujemy raz na instalację)

Przed wprowadzeniem jakichkolwiek zmian zrób kopię każdego pliku.

#### 1.1. Edycja pliku `httpd.conf`

Otwórz `D:\wamp64\bin\apache\apache2.4.51\conf\httpd.conf` (litera dysku zgodna z naszą instalacją *Wampserwer*, należy na nią zwracać uwagę również w kolejnych krokach) i odkomentuj (usuń # z początku) 3 linijki kodu (raczej nie będą one w tym pliku umieszczone jedna pod drugą):

```conf
LoadModule ssl_module modules/mod_ssl.so
Include conf/extra/httpd-ssl.conf
LoadModule socache_shmcb_module modules/mod_socache_shmcb.so
```

#### 1.2. Edycja pliku `httpd-ssl.conf`

Otwórz `D:\wamp64\bin\apache\apache2.4.51\conf\extra\httpd-ssl.conf`

##### 1.2.1. DocumentRoot oraz ServerName

Zamień lub upewnij się, że następująca konfiguracja istnieje - nie jest zakomentowana (3 linijka jest opcjonalna - mail można podmienić na swój, ale nie jest to konieczne):

```conf
DocumentRoot "${SRVROOT}/htdocs"
ServerName www.example.com:443
ServerAdmin admin@example.com
ErrorLog "${SRVROOT}/logs/error.log"
TransferLog "${SRVROOT}/logs/access.log"
```

zamień na:

```conf
DocumentRoot "${SRVROOT}/www"
ServerName localhost:443
ServerAdmin admin@example.com
ErrorLog "${SRVROOT}/logs/error.log"
TransferLog "${SRVROOT}/logs/access.log"
```

##### 1.2.2. Ustawienie pliku certyfikatu SSL

Zamień linijkę:

```conf
SSLCertificateFile "${SRVROOT}/conf/server.crt"
```

na:

```conf
SSLCertificateFile "${SRVROOT}/conf/key/localhost.crt"
#SSLCertificateFile "${SRVROOT}/conf/server.crt"
```

##### 1.2.3. Ustawienie pliku klucza certyfikatu

Zamień linijkę:

```conf
SSLCertificateKeyFile "${SRVROOT}/conf/server.key"
```

na:

```conf
SSLCertificateKeyFile "${SRVROOT}/conf/key/localhost.key"
#SSLCertificateKeyFile "${SRVROOT}/conf/server.key"
```

##### 1.2.4. Pozostała konfiguracja

Upewnij się, że następujące linie istnieją (lub nie są zakomentowane), jeśli nie to dodaj je:

```conf
SSLSessionCache     "shmcb:${SRVROOT}/logs/ssl_scache(512000)"
```

oraz

```conf
CustomLog "${SRVROOT}/logs/ssl_request.log" \
          "%t %h %{SSL_PROTOCOL}x %{SSL_CIPHER}x \"%r\" %b"
```

### 2. Tworzenie i instalacja certyfikatów

#### 2.1. Instalacja OpenSSL

Instalujemy [Win32/Win64 OpenSSL](https://slproweb.com/products/Win32OpenSSL.html).

#### 2.2. Generowanie certyfikatów

Wszystkie komendy wykonuj w konsoli Windows - *Wiersz polecenia* (uruchomionej z uprawnieniami administratorskimi), będąc w folderze `C:\Program Files\OpenSSL-Win64\bin` (początek ścieżki oczywiście może się różnić w zależności od instalacji). Wygenerowane pliki znajdziesz później w tym samym folderze.

##### 2.2.1. Urząd certyfikacji (CA)

Wygeneruj pliki: `RootCA.pem` oraz `RootCA.key`:

```console
openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout RootCA.key -out RootCA.pem -subj "/C=PL/CN=mojanazwa-Root-CA"
```

Zamiast `mojanazwa-Root-CA` najlepiej dać swoją, by od razu rozróżnić własny certyfikat. Parametr `-days` odpowiada za to jak długo będzie ważny certyfikat.

Teraz pozostaje wygenerowanie samego certyfikatu urzędu (plik `RootCA.crt`):

```console
openssl x509 -outform pem -in RootCA.pem -out RootCA.crt
```

##### 2.2.2. Certyfikat nazwy domeny

Przykład dla `localhost` oraz domen lokalnych `*.local`

###### 2.2.2.1. Lista naszych hostów

Utwórz plik `domains.ext` w folderze `C:\Program Files\OpenSSL-Win64\bin`. Zawierać on będzie listę wszystkich lokalnych domen (plik ten zostaw "na przyszłość", do późniejszego dodawania kolejnych adresów):

```ext
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = localhost
DNS.2 = dev.local
DNS.3 = wordpress.local
```

###### 2.2.2.2. Klucz prywatny oraz certyfikat

Wygeneruj `localhost.key` oraz `localhost.csr`. Parametry takie jak kraj, województwo, miasto oraz nazwa certyfikatu możesz ustawić wg własnego uznania:

```console
openssl req -new -nodes -newkey rsa:2048 -keyout localhost.key -out localhost.csr -subj "/C=PL/ST=Mazowieckie/L=Warszawa/O=mojanazwa-Certificates/CN=localhost.local"
```

Następnie wygeneruj plik `localhost.crt`:

```console
openssl x509 -req -sha256 -days 1024 -in localhost.csr -CA RootCA.pem -CAkey RootCA.key -CAcreateserial -extfile domains.ext -out localhost.crt
```

Teraz skopiuj klucz prywatny `localhost.key` oraz certyfikat `localhost.crt` do folderu `D:\wamp64\bin\apache\apache2.4.51\conf\key` (jeśli katalog `key` nie istnieje, to go utwórz).

### 3. Konfigurujemy VirtualHosts

Jeśli domeny nie zostały wcześniej skonfigurowane w *Wampserwer*, to utwórz je w menadżerze *VirtualHosts*.

Otwórz plik `D:\wamp64\bin\apache\apache2.4.51\conf\extra\httpd-vhosts.conf` i zaktualizuj listę hostów wg schematu:

Zmień porty z `:80` na `:443` i dodaj następujące linie do każdego hosta:

```conf
SSLEngine on
SSLCertificateFile "${SRVROOT}/conf/key/certificate.crt"
SSLCertificateKeyFile "${SRVROOT}/conf/key/private.key"
```

Edytowany plik `httpd-vhosts.conf` po zmianach powinien wyglądać podobnie do tego:

```conf
# Virtual Hosts
#
<VirtualHost *:443>
  ServerName localhost
  ServerAlias localhost
  DocumentRoot "${INSTALL_DIR}/www"
  <Directory "${INSTALL_DIR}/www/">
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
  SSLEngine on
  SSLCertificateFile "${SRVROOT}/conf/key/localhost.crt"
  SSLCertificateKeyFile "${SRVROOT}/conf/key/localhost.key"
</VirtualHost>
#
<VirtualHost *:443>
	ServerName dev.local
	DocumentRoot "d:/wamp64/www/dev"
	<Directory  "d:/wamp64/www/dev/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
	SSLEngine on
	SSLCertificateFile "${SRVROOT}/conf/key/localhost.crt"
	SSLCertificateKeyFile "${SRVROOT}/conf/key/localhost.key"
</VirtualHost>
#
<VirtualHost *:443>
	ServerName wordpress.local
	DocumentRoot "d:/wamp64/www/wordpress"
	<Directory  "d:/wamp64/www/wordpress/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
	SSLEngine on
	SSLCertificateFile "${SRVROOT}/conf/key/localhost.crt"
	SSLCertificateKeyFile "${SRVROOT}/conf/key/localhost.key"
</VirtualHost>
#
```

Zrestartuj *Wampserver*.

### 4. Zaufaj lokalnemu CA

Na tym etapie witryny będą ładować się z ostrzeżeniem o certyfikatach z podpisem własnym. Aby uzyskać zieloną kłódkę nasz lokalny urząd certyfikacji musi zostać dodany do **Zaufanych głównych urzędów certyfikacji**. Robimy to tak naprawdę raz, do czasu aż nasz certyfikat nie wygaśnie.

#### 4.1. *Windows 10*: *Chrome*, *IE11* i *Edge*

System *Windows 10* rozpoznaje pliki `.crt`, więc wystarczy kliknąć prawym przyciskiem myszy utworzony w punkcie 2.2.1. plik `RootCA.crt` > **Zainstaluj**, aby otworzyć okno dialogowe importu. Upewniamy się, że została wybrana grupa **Zaufane główne urzędy certyfikacji** i potwierdzamy.

Powinieneś teraz otrzymać zieloną kłódkę w Chrome, IE11 i Edge.

#### 4.2. *Windows 10*: *Firefox*

Istnieją dwa sposoby na uzyskanie zaufania CA w Firefoksie.

Najprostszym sposobem jest sprawienie, aby Firefox korzystał z **Zaufanych głównych urzędów certyfikacji** systemu *Windows*, przechodząc do `about:config` i ustawiając **security.enterprise_roots.enabled** na *true*.

Innym sposobem jest zaimportowanie certyfikatu, przechodząc do `about:preferences#privacy` > **Certyfikaty** > **Importuj** > `RootCA.pem` > *Potwierdź dla stron internetowych*.

### 5. Dodawanie nowych hostów

Jeśli po jakimś czasie jest potrzeba zaktualizowania listy naszych hostów, to wystarczy ponowić następujące kroki:

1. edytuj plik `domains.ext` (punkt 2.2.2.1.),
2. usuń stary, a następnie wygeneruj nowy plik `localhost.crt` i podmień go w folderze `key` (punkt 2.2.2.2.)
3. skonfiguruj/edytuj nowy VirtualHost (punkt 3.)
4. zrestartuj *Wampserwer*.

---

Źródła:
- [How to create an HTTPS certificate for localhost domains](https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8)
- [How to setup and enable https with SSL on wamp server virtual host](https://infyom.com/blog/how-to-enable-localhost-https-ssl-on-wamp-server) oraz [How to Enable HTTPS / SSL on WAMP Server 3.2.0](https://zuziko.com/tutorials/how-to-enable-https-ssl-on-wamp-server/)
