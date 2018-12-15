"use strict";

const { Controller } = require("egg");
const os = require("os");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const ifaces = os.networkInterfaces();
    const ips = [];
    Object.keys(ifaces).forEach(function(ifname) {
      ifaces[ifname].forEach(function(iface) {
        ips.push({
          name: ifname,
          ip: iface.address
        });
      });
    });
    await ctx.render("index.html", { ips });
  }
}

module.exports = HomeController;
