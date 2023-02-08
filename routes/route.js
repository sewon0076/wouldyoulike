//page 연결이 쉬워지도록
//
const { json } = require("body-parser");
const { Domain } = require("domain");
const multer = require("multer");
const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("./../db.js");

router.get("/journal", (req, res) => {
    db.getJournalBest((rows) => {
        res.render("journal", { rows: rows }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
});
router.get("/", (req, res) => {
    res.render("mainPage");
});
router.get("/apod", (req, res) => {
    res.render("apod");
});
router.get("/contact_us", (req, res) => {
    res.render("contact_us");
});
// ==================uploading journal=================
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "../public/uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); //파일의 확장자
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일명 + 날짜 _ 확장자명
        },
    }),
    limits: { fileSize: 1920 * 1024 * 5 }, //2메가 까지 업로드 가능
});
// ======================================================
router.get("/upload_journal", (req, res) => {
    res.render("upload_journal");
});
router.post("/u_journal", upload.single("journal_img"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let num = req.query.num;
    let img = "uploads/" + req.file.filename;
    let title = param["title"];
    let subtitle = param["subtitle"];
    let writer = param["writer"];
    let category = param["category"];
    let password = param["password"];
    let content = param["content"];
    let hashtag = param["hashtag"];

    db.insertJournal(img, title, subtitle, writer, category, password, content, hashtag, () => {
        res.redirect("/journal");
    });
});
router.get("/journal", (req, res) => {
    db.getJournal((rows) => {
        console.log(num);
        res.render("journal", { rows: rows }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
});
//detail upload=====================================
router.get("/journalDetail", (req, res) => {
    let num = req.query.num;
    //getMemobyId는 그냥 지어준 이름
    db.getJournalbyid(num, (row) => {
        res.render("journal_detail", { row: row[0] });
    });
});
// router.get("/journal_detail", (req, res) => {
//     res.render("journal_detail");
// });
//==============modify button==================================================
router.get("/modifyJournal", (req, res) => {
    let num = req.query.num;
    db.modify_J(num, (row) => {
        res.render("modify_journal", { row: row[0] });
    });
});
// 업데이트 된 내용 내보내기=================================================
router.post("/m_journal", upload.single("journal_img"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let num = param["num"];
    let img = "uploads/" + req.file.filename;
    let title = param["title"];
    let subtitle = param["subtitle"];
    let writer = param["writer"];
    let category = param["category"];
    let password = param["password"];
    let content = param["content"];
    let hashtag = param["hashtag"];
    db.updateJournal(img, title, subtitle, writer, category, password, content, hashtag, () => {
        res.redirect("/journal");
    });
});
//===============================아이디가 일치하면 삭제하기
router.get("/deleteJournal", (req, res) => {
    let num = req.query.num;
    db.deleteJournal(num, () => {
        res.redirect("/journal");
    });
});
//==========================community
router.get("/upload_notice", (req, res) => {
    res.render("upload_notice");
});
router.post("/u_notice", upload.single("notice_img"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    // let num = req.query.num;
    let img = "uploads/" + req.file.filename;
    let title = param["title"];
    let writer = param["writer"];
    let category = param["category"];
    let password = param["password"];
    let content = param["content"];

    db.insertNotice(img, title, writer, category, password, content, () => {
        res.redirect("/community");
    });
});
router.get("/community", (req, res) => {
    db.getNotice((rows) => {
        res.render("community", { rows: rows }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
});
router.get("/noticeDetail", (req, res) => {
    let num = req.query.num;
    //getMemobyId는 그냥 지어준 이름
    db.getNoticebyid(num, (row) => {
        res.render("notice_detail", { row: row[0] });
    });
});

module.exports = router;
