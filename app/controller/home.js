"use strict";
let count = 0;
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
          ip: iface.address,
          pid: process.pid,
          ppid: process.ppid,
        });
      });
    });
    
    count++;
    await ctx.render("index.html", { ips, count });
  }
}

module.exports = HomeController;
