// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');

var app = express();


// [START hello_world]
// Say hello!
app.get('/', function (req, res) {
  res.status(200).send('Hello, world! (Public)');
});
// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(80, function () {
    var port = server.address().port;
    console.log('App listening on port %s', port);
  });
  // [END server]
}

module.exports = app;

var app_private = express();


// [START hello_world]
// Say hello!
app_private.get('/', function (req, res) {
  res.status(200).send('Hello, world! (Private)');
});
// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  var server_private = app_private.listen(8080, function () {
    var port_private = server_private.address().port;
    console.log('App listening on port %s', port_private);
  });
  // [END server]
}

module.exports = app_private;
