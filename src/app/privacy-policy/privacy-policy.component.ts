import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <div class="privacy-policy">
      <h1>Polityka prywatności</h1>

      <h2>1. Administrator danych osobowych</h2>
      <p>
        Administratorem Twoich danych osobowych jest Generator sp. z o.o. z
        siedzibą w Gdowie, ul. Winiary 98, 32-420, e-mail:
        generator&#64;adres.pl, telefon: +48 694 984 943.
      </p>

      <h2>2. Jakie dane zbieramy?</h2>
      <p>
        Za pośrednictwem formularza kontaktowego zbieramy następujące dane
        osobowe:
      </p>
      <ul>
        <li>Imię i nazwisko,</li>
        <li>Adres e-mail,</li>
        <li>Numer telefonu,</li>
        <li>Treść wiadomości.</li>
      </ul>

      <h2>3. Cel i podstawa prawna przetwarzania danych</h2>
      <p>Twoje dane osobowe przetwarzamy w celu:</p>
      <ul>
        <li>
          Odpowiedzi na Twoje zapytanie przesłane przez formularz kontaktowy
          (art. 6 ust. 1 lit. b RODO – realizacja umowy lub działania przed
          zawarciem umowy),
        </li>
        <li>
          Archiwizacji korespondencji w celach dowodowych (art. 6 ust. 1 lit. f
          RODO – prawnie uzasadniony interes administratora).
        </li>
      </ul>

      <h2>4. Czas przechowywania danych</h2>
      <p>
        Twoje dane będą przechowywane przez okres niezbędny do obsługi zapytania
        oraz przez czas wymagany przez przepisy prawa lub do momentu wniesienia
        skutecznego sprzeciwu wobec przetwarzania.
      </p>

      <h2>5. Odbiorcy danych</h2>
      <p>
        Twoje dane mogą być przekazane podmiotom świadczącym usługi IT,
        hostingowe lub inne, które wspierają nas w realizacji usług, przy czym
        wszystkie te podmioty zobowiązane są do ochrony danych zgodnie z RODO.
      </p>

      <h2>6. Twoje prawa</h2>
      <p>Masz prawo do:</p>
      <ul>
        <li>Dostępu do swoich danych,</li>
        <li>Sprostowania danych,</li>
        <li>Usunięcia danych,</li>
        <li>Ograniczenia przetwarzania,</li>
        <li>Wniesienia sprzeciwu wobec przetwarzania,</li>
        <li>Przenoszenia danych,</li>
        <li>
          Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO) w
          przypadku naruszenia przepisów RODO.
        </li>
      </ul>

      <h2>7. Kontakt</h2>
      <p>
        W sprawach związanych z przetwarzaniem danych osobowych możesz
        skontaktować się z nami pod adresem e-mail:
        <a href="mailto:generator@adres.pl">generator&#64;adres.pl</a> lub
        telefonicznie pod numerem
        <a href="tel:+48694984943">+48 694 984 943</a>.
      </p>
    </div>
  `,
  styles: [
    `
      .privacy-policy {
        margin: 10px;
        padding: 10px;
      }
    `,
  ],
})
export class PrivacyPolicyComponent {}
