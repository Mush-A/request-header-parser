const os = require('os');

const whoami = (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  })
}

module.exports = whoami;