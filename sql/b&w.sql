DROP TABLE IF EXISTS black_and_white;

CREATE TABLE black_and_white(
    id SERIAL PRIMARY KEY,
    url VARCHAR(300) NOT NULL,
    caption VARCHAR(200),
);

INSERT INTO black_and_white (id, url, caption) VALUES ('https://s3.amazonaws.com/gene-coleman/11th+Avenue%2C+1999.jpg', '11th Avenue, 1999');
