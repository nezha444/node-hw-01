const { program } = require("commander");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      return console.log(list);

    case "get":
      const getById = await contacts.getContactById(id);
      return console.log(getById);

    case "add":
      const add = await contacts.addContact(name, email, phone);
      return console.log(add);

    case "remove":
      const remove = await contacts.removeContact(id);
      return console.log(remove);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("--action, <type>")
  .option("--id, <type>")
  .option("--name, <type>")
  .option("--email, <type>")
  .option("--phone, <type>");

program.parse();

const options = program.opts();

invokeAction(options);
