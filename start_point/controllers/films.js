//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require("express");
var router = new express.Router();

//INDEX
router.get("/", function(req, res) {
  res.json(films);
})

//SHOW
router.get("/:id", function(req, res) {
  var film = films[req.params.id];
  res.json(film);
})

//CREATE
router.post("/", function(req, res) {
  films.push(req.body.newFilm);
  res.json(films);
})

//UPDATE
router.put("/:id", function(req, res) {
  var id = req.params.id;
  var updatedFilm = req.body.updatedFilm;
  films[id] = updatedFilm;
  res.json(films);
})

//DESTROY
router.delete("/:id", function(req, res) {
  var id = req.params.id;
  films.splice(id, 1);
  res.json(films);
})

module.exports = router
