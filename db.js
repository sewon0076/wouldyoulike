var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "test.cqi8uofs7gi9.ap-northeast-1.rds.amazonaws.com",
    user: "root",
    password: "sewon0076",
    database: "wouldyou",
    multipleStatements: true, //데이터 여러개 넣는것
});

//thumnail==================================
//============================================================================================
// function insertProduct(img, name, price, callback) {
//     connection.query(`INSERT INTO product1(create_time,img,name,price) value(now(),'${img}','${name}',${price})`, (err) => {
//         if (err) throw err;
//         callback();
//     });
// }
function insertJournal(img, title, subtitle, writer, category, password, content, hashtag, callback) {
    connection.query(
        `INSERT INTO wouldyou_journal(create_time, img, title, subtitle, writer, category, password, content, hashtag) values (NOW(), '${img}','${title}','${subtitle}','${writer}','${category}',${password},'${content}','${hashtag}')`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
function getJournal(callback) {
    connection.query("SELECT * FROM wouldyou_journal ORDER BY num", (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}
function getJournalBest(callback) {
    connection.query("SELECT * FROM wouldyou_journal ORDER BY num", (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}
// function getJournalLatest(callback) {
//     connection.query("SELECT * FROM wouldyou_journal ORDER BY num desc limit 6", (err, latest) => {
//         if (err) throw err;
//         callback(latest);
//     });
// }
//메모중 아이디가 일치하는 데이터 추출(내보내는 건 못함)
//아이디는 프라이머리 키로 공통된 숫자 불가능
function getJournalbyid(num, callback) {
    //한줄을 다 불러올때는 from + 'table 이름" + 없음
    connection.query(`SELECT * FROM wouldyou_journal where num='${num}'`, (err, row) => {
        console.log(num);
        if (err) throw err;
        callback(row);
    });
}
//아이디가 일치하는 부분을 update할 내용 내보내기
function modify_J(num, callback) {
    connection.query(`SELECT * FROM wouldyou_journal where num=${num}`, (err, row) => {
        console.log("update=" + num);
        if (err) throw err;
        callback(row);
    });
}

//아이디가 일치하는 부분을 update한 내용 내보내기
function updateJournal(num, img, title, subtitle, writer, category, password, content, hashtag, callback) {
    console.log("update send =" + num);
    connection.query(
        `UPDATE wouldyou_journal set  create_time=now(), img='${img}',title='${title}',subtitle='${subtitle}',writer='${writer}',category='${category}',password=${password},content='${content}',hashtag='${hashtag}' where num=${num}`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
//아이디가 일치하면 삭제하기
function deleteJournal(num, callback) {
    connection.query(`DELETE from wouldyou_journal WHERE num=${num}`, (err) => {
        if (err) throw err;
        callback();
    });
}
// ================================================sign_up=============================
//회원정보를 받아올때
function accountInformation(callback) {
    connection.query("SELECT * FROM account", (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}
//받아온 회원정보를 입력할때
function createAccount(name, password, password_confirm, birthday, callback) {
    connection.query(
        `insert into account (create_time,name, password, password_confirm, birthday) values (NOW(),'${name}','${password}','${password_confirm}','${birthday}')`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
// ===================================login=======================================================
function loginAccount(name, password, callback) {
    connection.query(`SELECT * FROM account where name='${name}' and password='${password}'`, (err, results) => {
        if (err) throw err;
        callback(results);
        console.log(name + "db");
        console.log(password + "db");
    });
}
// //받아온 회원정보를 login_complete 창에입력할때
// function loginAccount(name) {
//     connection.query(`insert into account (name) values ('${name}')`, (err) => {
//         if (err) throw err;
//         callback();
//     });
// }
module.exports = {
    //여러 함수가 다 들어갈 수 있다
    insertJournal,
    getJournal,
    getJournalbyid,
    modify_J,
    updateJournal,
    getJournalBest,
    deleteJournal,
};
