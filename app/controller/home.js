"use strict";
let count = 0;
const { Controller } = require("egg");
const os = require("os");


class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const {PC_ID} = ctx.app.config;
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
    await ctx.render("index.html", { ips, count, id: PC_ID });
  }
}

module.exports = HomeController;
