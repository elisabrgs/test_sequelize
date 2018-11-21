const express = require("express");
const app = express();
const models = require("./models");
const teams = require("./models/teams");

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("HELLO YOU !");
});

app.post(`/registerTeam`, (req, res) => {
  const { teamName } = req.body;
  if (!teamName) return;
  models.teams.create({ name: teamName }).then(team => {
    res.json(team);
  });
});

app.get("/getTeam", (req, res) => {
  models.teams.findAll().then(teams => res.status(200).json(teams));
});

app.delete("/deleteATeam/:TeamId", (req, res) => {
  const { TeamId } = req.params;
  if (!TeamId) return;
  models.teams.destroy({
    where: {
      id: TeamId
    }
  });
});

app.put("/modifyATeam/:TeamId", (req, res) => {
  const { TeamId } = req.params;
  const NewTeamName = req.body.newName;
  if (!NewTeamName) return;
  models.teams.findById(TeamId).then(team => {
    team.update({ name: NewTeamName });
  });
});

models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3002);
});