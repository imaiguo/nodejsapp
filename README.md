# nodejsapp


nodejs applications


测试web服务端响应

```bash

$  curl "http://test.ephraim.site:3000" --verbose
*   Trying 127.0.0.1:3000...
* Connected to test.ephraim.site (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: test.ephraim.site:3000
> User-Agent: curl/7.87.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Content-Type: text/plain
< Date: Thu, 09 Mar 2023 09:03:17 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 23
<
{"data":"Hello World!"}* Connection #0 to host test.ephraim.site left intact
```

访问支持tls的https地址
```bash
$ curl.exe  https://test.ephraim.site/ --verbose
*   Trying 127.0.0.1:443...
* Connected to test.ephraim.site (127.0.0.1) port 443 (#0)
* ALPN: offers h2
* ALPN: offers http/1.1
*  CAfile: C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
*  CApath: none
* [CONN-0-0][CF-SSL] TLSv1.3 (OUT), TLS handshake, Client hello (1):
* [CONN-0-0][CF-SSL] TLSv1.3 (IN), TLS handshake, Server hello (2):
* [CONN-0-0][CF-SSL] TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* [CONN-0-0][CF-SSL] TLSv1.3 (IN), TLS handshake, Certificate (11):
* [CONN-0-0][CF-SSL] TLSv1.3 (IN), TLS handshake, CERT verify (15):
* [CONN-0-0][CF-SSL] TLSv1.3 (IN), TLS handshake, Finished (20):
* [CONN-0-0][CF-SSL] TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* [CONN-0-0][CF-SSL] TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
* ALPN: server accepted http/1.1
* Server certificate:
*  subject: CN=test.ephraim.site
*  start date: Mar  9 00:00:00 2023 GMT
*  expire date: Mar  9 23:59:59 2024 GMT
*  subjectAltName: host "test.ephraim.site" matched cert's "test.ephraim.site"
*  issuer: C=US; O=DigiCert Inc; OU=www.digicert.com; CN=Encryption Everywhere DV TLS CA - G2
*  SSL certificate verify ok.
> GET / HTTP/1.1
> Host: test.ephraim.site
> User-Agent: curl/7.87.0
> Accept: */*
>
* [CONN-0-0][CF-SSL] TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* [CONN-0-0][CF-SSL] TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Date: Thu, 09 Mar 2023 09:14:12 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
<
hello world
* Connection #0 to host test.ephraim.site left intact
```