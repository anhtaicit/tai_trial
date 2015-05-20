var pg = require('pg');
var conString = "postgres://tai:abcd1234@localhost/bitmark_blockchain";

var client = new pg.Client(conString);
client.connect();

var query = client.query("SELECT * FROM bitmark_transfers");
query.on("row", function (row, result) {
    result.addRow(row);
});
query.on("end", function (result) {
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});
