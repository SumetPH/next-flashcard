const next = require("next");
const express = require("express");
const multer = require("multer");
var upload = multer({ dest: "uploads/" });

const admin = require("firebase-admin");
const serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// nextjs config
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(upload.array());

  // routes

  server.post("/api/login", (req, res, next) => {
    try {
      db.collection("user")
        .doc(req.body.username)
        .get()
        .then(data => {
          if (data.exists) {
            return res.json(data.id);
          }
          db.collection("user")
            .doc(req.body.username)
            .set({ created_at: new Date() })
            .then(() => {
              return res.json(req.body.username);
            })
            .catch(err => {
              next(err);
            });
        })
        .catch(err => {
          next(err);
        });
    } catch (err) {
      next(err);
    }
  });

  // all
  server.get("/api/card/:username", (req, res, next) => {
    try {
      db.collection(req.params.username)
        .get()
        .then(snap => {
          let data = [];
          snap.forEach(doc => {
            data.push({
              id: doc.id,
              ...doc.data()
            });
          });
          return res.json(data);
        })
        .catch(err => {
          next(err);
        });
    } catch (err) {
      next(err);
    }
  });

  // insert
  server.post("/api/card/:username", (req, res, next) => {
    db.collection(req.params.username)
      .doc()
      .set({
        word: req.body.word,
        hint: req.body.hint,
        trans: req.body.trans
      })
      .then(() => {
        return res.json("card created.");
      })
      .catch(err => {
        next(err);
      });
  });

  // delete
  server.delete("/api/card/:username/:id", (req, res, next) => {
    try {
      db.collection(req.params.username)
        .doc(req.params.id)
        .delete()
        .then(() => {
          return res.json("card deleted.");
        })
        .catch(err => {
          next(err);
        });
    } catch (err) {
      next(err);
    }
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({ massage: err.message, stack: err.stack });
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
