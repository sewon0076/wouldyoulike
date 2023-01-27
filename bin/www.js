//실행시켜주는 애
let APP = require("../app");
let HOSTNAME = "127.0.0.1";
let PORT = process.env.PORT || 3308;
app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOSTNAME}:${PORT}/`);
    console.log(`${PORT}로 express 실행`);
});
