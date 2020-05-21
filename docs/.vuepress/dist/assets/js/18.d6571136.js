(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{386:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ratelimits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ratelimits"}},[t._v("#")]),t._v(" Ratelimits")]),t._v(" "),a("p",[t._v("Ratelimits is a Discord restriction which prevents you from performing actions in a very fast rate.\nMost ratelimits are on a per-channel or a per-server basis.")]),t._v(" "),a("h2",{attrs:{id:"the-most-important-ratelimits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-most-important-ratelimits"}},[t._v("#")]),t._v(" ❗️ The Most Important Ratelimits")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Action")]),t._v(" "),a("th",[t._v("Ratelimit")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Send Messages")]),t._v(" "),a("td",[t._v("5 / 5s")]),t._v(" "),a("td",[t._v("per channel")])]),t._v(" "),a("tr",[a("td",[t._v("Delete Messages")]),t._v(" "),a("td",[t._v("5 / 1s")]),t._v(" "),a("td",[t._v("per channel")])]),t._v(" "),a("tr",[a("td",[t._v("Add/Remove Reactions")]),t._v(" "),a("td",[t._v("1 / 0.25s")]),t._v(" "),a("td",[t._v("per channel")])]),t._v(" "),a("tr",[a("td",[t._v("Edit Server Members")]),t._v(" "),a("td",[t._v("10 / 10s")]),t._v(" "),a("td",[t._v("per server")])]),t._v(" "),a("tr",[a("td",[t._v("Edit Member Nickname")]),t._v(" "),a("td",[t._v("1 / 1s")]),t._v(" "),a("td",[t._v("per server")])]),t._v(" "),a("tr",[a("td",[t._v("Edit Bot Username")]),t._v(" "),a("td",[t._v("2 / 1h")]),t._v(" "),a("td",[t._v("per account")])]),t._v(" "),a("tr",[a("td",[t._v("Update Channels")]),t._v(" "),a("td",[t._v("2 / 10m")]),t._v(" "),a("td",[t._v("per account")])]),t._v(" "),a("tr",[a("td",[t._v("All Actions Combined")]),t._v(" "),a("td",[t._v("50 / 1s")]),t._v(" "),a("td",[t._v("per account")])])])]),t._v(" "),a("h2",{attrs:{id:"dealing-with-ratelimits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-ratelimits"}},[t._v("#")]),t._v(" 💪 Dealing with Ratelimits")]),t._v(" "),a("p",[t._v("Usually Javacord takes care about these limitations for you.\nAs a user, there's nothing you have to do, but you should at least know that ratelimits exist.")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("The following code")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Who even needs loops?")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #9"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #11"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ratelimit Example #12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("would look like this in the client:")]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://i.imgur.com/ailPCdH.gif",alt:""}})])]),t._v(" "),a("p",[t._v("You can clearly see the delay between every 5 sent messages.")]),t._v(" "),a("h2",{attrs:{id:"can-i-disable-ratelimits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-disable-ratelimits"}},[t._v("#")]),t._v(" ❌ Can I disable ratelimits?")]),t._v(" "),a("p",[t._v("No. Ratelimits are a limitation from Discord itself, which you cannot circumvent.")])])}),[],!1,null,null,null);s.default=e.exports}}]);