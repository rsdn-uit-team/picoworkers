const os = require('os');
const { exec } = require('child_process');

const platform = os.platform();
let command =
  './node_modules/react-scripts/node_modules/.bin/eslint src --max-warnings=0';
if (platform === 'win32') {
  command = `bash ${command}`;
}

exec(command, (err, stdout, stderr) => {
  if (err) {
    process.exit(1);
  }
});
