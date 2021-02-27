LOAD DATA INFILE "C:/Users/PC/Desktop/seungwoo/db/preprocessed_original_data_2.csv"
INTO TABLE original_table
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;