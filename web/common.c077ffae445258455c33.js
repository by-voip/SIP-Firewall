(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OoV3:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=function(){function t(t){this._http=t;var e=new XMLHttpRequest,o="http://localhost/";e.open("GET","/assets/url.conf",!1),e.onreadystatechange=function(){4===e.readyState&&(200!==e.status&&0!=e.status||(o=e.responseText))},e.send(null),this.url=o}return t.prototype.getUser=function(t,e){var o=JSON.stringify({user:t,pass:e});return this._http.post(this.url+"/validate.php",o)},t.prototype.getBlacklist=function(t,e,o,r,s,i){var a=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),id:t,page:e,end:o,type:r,order:s,dir:i});return this._http.post(this.url+"/blacklist.php",a)},t.prototype.updateBlacklist=function(t,e,o,r,s,i,a){var n=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),id:t,value:e,detail:o,ban:r,action:s,code:i,text:a});return this._http.post(this.url+"/blacklist_update.php",n)},t.prototype.createBlacklist=function(t,e,o,r,s,i,a){var n=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),value:t,detail:e,ban:o,action:r,code:s,text:i,type:a});return this._http.post(this.url+"/blacklist_add.php",n)},t.prototype.deleteBlacklist=function(t){var e=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),id:t});return this._http.post(this.url+"/blacklist_delete.php",e)},t.prototype.isBlacklisted=function(t,e){var o=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),type:t,value:e});return this._http.post(this.url+"/isblacklisted.php",o)},t.prototype.getWhitelist=function(t,e,o,r,s,i){var a=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),id:t,page:e,end:o,type:r,order:s,dir:i});return this._http.post(this.url+"/whitelist.php",a)},t.prototype.updateWhitelist=function(t,e,o){var r=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),id:t,value:e,detail:o});return this._http.post(this.url+"/whitelist_update.php",r)},t.prototype.createWhitelist=function(t,e,o){var r=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),value:t,detail:e,type:o});return console.log(this.url+"/whitelist_add.php --data "+r),this._http.post(this.url+"/whitelist_add.php",r)},t.prototype.deleteWhitelist=function(t){var e=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),id:t});return this._http.post(this.url+"/whitelist_delete.php",e)},t.prototype.getCause=function(t,e){var o=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),g:t,type:e});return this._http.post(this.url+"/resume-stats.php",o)},t.prototype.getDestinations=function(t,e,o,r){var s=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),t:t,country:e,type:o,customvalue:r});return this._http.post(this.url+"/destination.php",s)},t.prototype.getBlocked=function(t,e,o,r,s,i){var a=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),id:t,filters:e,page:o,end:r,order:s,dir:i});return this._http.post(this.url+"/blocked.php",a)},t.prototype.getAllowed=function(t,e,o,r,s,i){var a=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),id:t,filters:e,page:o,end:r,order:s,dir:i});return this._http.post(this.url+"/allowed.php",a)},t.prototype.getCountries=function(){return this._http.post(this.url+"/country_code.php","")},t.prototype.getConfig=function(t){var e=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),field:t});return this._http.post(this.url+"/config.php",e)},t.prototype.updateConfig=function(t,e,o){var r=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),field:t,value:e,matches:o});return this._http.post(this.url+"/config.php",r)},t.prototype.updatePassword=function(t,e,o){var r=JSON.stringify({user:localStorage.getItem("user"),token:localStorage.getItem("token"),login:t,oldpass:e,newpass:o});return this._http.post(this.url+"/password.php",r)},t}()}}]);