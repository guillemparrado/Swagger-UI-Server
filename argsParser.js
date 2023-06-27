const { exit } = require("process");

module.exports = {
  parseArgs: argv => {
      const args = { main: [] };

      for (let i = 2; i < argv.length; i++) {
        // Args pair start
        if (argv[i].startsWith("-")) {
          // Check the pair has value
          if (i == argv.length - 1 || argv[i + 1].startsWith("-")) {
            console.log("Error: enter value for argument: " + argv[i]);
            exit(1);
          }
          // Store the value
          args[argv[i].substring(1, argv[i].length)] = argv[i + 1];

          // Skip next loop
          i++;
        }

        // Value without option is main arg
        else {
          args.main.push(argv[i]);
        }
      }

      return args;
  }
}

