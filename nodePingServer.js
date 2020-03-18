var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("ping -c 3 https://us-central1-istio-test-1-249901.cloudfunctions.net/cors", puts);