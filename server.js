const express = require('express');
const app = express();

const server = app.listen(3000, ()=>{
    console.log('start server : locallhost:3000');

});

app.set('views',__dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

app.get('/', function(req,res){
    res.render('index.html')
});

app.get('/abc', function(req,res){
    res.send('abcabc')
});

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});

app.get('/db', function(req,res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM test', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('results',results);
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
    });
});