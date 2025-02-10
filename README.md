# staticExamle

Tämä esimerkki havainnollistaa, kuin MVC-mallia sovelletaan Node.js/Express sovelluksessa.

## Controllerit

Kansiossa <b>routes</b> on tiedosto book.js ja sen voidaan ajatella olevan kontrolleri. Kun aikanaan tehtäisiin frontend-sovellus, niin se kommunikoisi tuon kontrollerin kanssa, kun haluaisi kommunikoidan tietokannassa olevan book-taulun kanssa.

## Modelit

Kansiossa <b>models</b> on tiedosto book_model.js ja book kontrolleri kommunikoi sen kanssa, kun haluaa käsitellä tietokannan book-taulua.

## Sovelluksen asennus

<ol>
<li>Kloonaan sovellus komennolla git clone https://github.com/tvt24spo-esimerkit/staticExample.git</li>
<li>Avaa komentokehote kansioon staticExample</li>
<li>Anna komento npm install</li>
<li>Käynnistä sovellus komennolla node app.js (tai nodemon app.js)</li>
</ol>