DELETE FROM Staff_Account;
DELETE FROM User_Account;
DELETE FROM Payment_Info;
DELETE FROM Shopping_Cart;
DELETE FROM Movie_Info;
DELETE FROM Show_Info;
DELETE FROM Ticket;

INSERT INTO Staff_Account VALUES ('admin', 'password', '1');

INSERT INTO User_Account VALUES ('dummy', 'password', '0', 'Test', 'Account', '9999-12-31', 
'TestAccount@TestingAcounts.Test', '9999 Test Drive', 'Test City', 'Test State', '99999', '9999999999');

INSERT INTO Payment VALUES ('9999999999999999', '12/99', '999', '9999 Test Drive', 'Test City', 'Test State',
'99999', 'dummy');

INSERT INTO Shopping_Cart VALUES ('TEST99DUMMY1ID', 'dummy', '9999-12-31 23:59:59', '9999.99'); 

INSERT INTO Movie_Info VALUES ('Test Movie', 'English', 'PG-13', 
'This movie is a test movie for testing purposes only', 'Test Genre', '9999-12-31 23:59:59');

INSERT INTO Show_Info VALUES ('TM-001', 'Test Movie', '99 hr 59 min',
'CC, SuperScreen DLX, Wheelchair, ALD, CaptiView', 'ABC999', '23:59:59');

INSERT INTO Ticket VALUES ('DUMMY1ID-TICKET', 'TEST99DUMMY1ID', 'Test Movie', 'TM-001', 'ABC999', '999', '9999.99');