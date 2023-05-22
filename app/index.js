const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  database: "db_202223z_va_prj_ocrent",
  port: 9999,
  user: "db_202223z_va_prj_ocrent_owner",
  password: "8c92f932c023",
});

client.connect((err) => {
  if (!err) {
    console.log("Connected.");
  } else {
    console.log(err.message);
  }
});

client
  .query("SELECT * FROM project.users AS users")
  .then((res) => {
    for (i = 0; i < res.fields.length; i++) {
      console.log(res.rows[i]);
    }
  })
  .catch((e) => console.error(e.stack));
