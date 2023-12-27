import DnsEmailValidation from "dns-email-validation";

const start = async () => {
  console.log(
    "mail@gmail.com:",
    await DnsEmailValidation.verify("mail@gmail.com") // { verification: true }
  );
  console.log(
    "mail@example.com:",
    await DnsEmailValidation.verify("mail@example.com") // { verification: false, reason: [ 'MX' ] }
  );
};

start()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .then(() => {
    console.log("> The execution of the example is completed.");
    process.exit(0);
  });
