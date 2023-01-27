//실행시켜주는 애
let APP = require("../app");
let HOSTNAME = "127.0.0.1";
let PORT = process.env.PORT || 3308;
app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`);
    console.log(`${port}로 express 실행`);
});
