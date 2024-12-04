const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const mysql2 = require("mysql");
const bcrypt = require("bcrypt");

const app = express();
const port = 6666;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const connection = mysql.createConnection({
  host: "student.veleri.hr",
  user: "fgunja",
  password: "11",
  database: "fgunja",
});

app.use(express.urlencoded({ extended: true }));

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
    request - slanje zahtjeva s klijentske strane
    response - slanje odgovora sa serverske strane

    npm install -g nodemon
*/
//response.send("popis knjiga");
app.get("/api/knjige/:id", (request, response) => {
  const id = request.params.id;
  connection.query(
    "SELECT * FROM knjiga WHERE id = ?",
    id,
    (error, results) => {
      if (error) throw error;
      response.send(results);
    }
  );
  //response.send("jedna knjiga "+id);
});
app.get("/api/knjige", (request, response) => {
  connection.query("SELECT * FROM knjiga", (error, results) => {
    if (error) throw error;

    // Ako su slike BLOB podaci, pretvorimo ih u Base64
    results.forEach((book) => {
      if (book.slika) {
        const base64Image = Buffer.from(book.slika).toString("base64");
        book.slika = data;
        image / jpeg;
        base64, $;
        {
          base64Image;
        } // Pretpostavljamo da je slika JPEG
      }
    });

    response.send(results);
  });
});
app.post("/api/registracija", (req, res) => {
  const { ime, prezime, korime, lozinka } = req.body;

  // Provjera postoji li već korisnik s istim korisničkim imenom
  connection.query(
    "SELECT * FROM korisnik WHERE korime = ?",
    [korime],
    (err, results) => {
      if (err) {
        return res.status(500).send("Greška pri provjeri korisnika.");
      }
      if (results.length > 0) {
        return res.status(400).send({ message: "Korisničko ime već postoji." });
      }

      // Hashiranje lozinke prije pohrane
      bcrypt.hash(lozinka, 10, (err, hashedPassword) => {
        if (err) {
          console.error("Greška pri spremanju korisnika:", err); // Ispisujmo detaljnu pogrešku
          return res.status(500).send("Greška pri spremanju korisnika.");
        }

        // Spremanje novog korisnika u bazu podataka
        const query =
          "INSERT INTO korisnik (ime, prezime, korime, lozinka) VALUES (?, ?, ?, ?)";
        connection.query(
          query,
          [ime, prezime, korime, hashedPassword],
          (err, result) => {
            if (err) {
              return res.status(500).send("Greška pri spremanju korisnika.");
            }

            res.status(200).send({ message: "Korisnik uspješno registriran!" });
          }
        );
      });
    }
  );
});

app.post("/api/rezerv_knjige", (request, response) => {
  const data = request.body;
  rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]];

  connection.query(
    "INSERT INTO rezervacija (datum_rez, knjiga, korisnik) VALUES ?",
    [rezervacija],
    (error, results) => {
      if (error) throw error;
      response.send(results);
    }
  );

  //response.send("Poslano "+data.id_knjiga);
});

app.listen(port, () => {
  console.log("Server running at port: " + port);
});
