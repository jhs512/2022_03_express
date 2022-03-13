DROP DATABASE IF EXISTS express_sample1;
CREATE DATABASE express_sample1;
USE express_sample1;

CREATE TABLE article (
    id INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    reg_date DATETIME NOT NULL,
    update_date DATETIME NOT NULL,
    title VARCHAR(200) NOT NULL,
    `body` TEXT NOT NULL
);

INSERT INTO article
SET reg_date = NOW(),
update_date = NOW(),
title = '제목 1',
`body` = '내용 1';

INSERT INTO article
SET reg_date = NOW(),
update_date = NOW(),
title = '제목 2',
`body` = '내용 2';

INSERT INTO article
SET reg_date = NOW(),
update_date = NOW(),
title = '제목 3',
`body` = '내용 3';

SELECT * FROM article;