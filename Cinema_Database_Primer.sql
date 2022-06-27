DELETE FROM Staff_Account;
DELETE FROM User_Account;
DELETE FROM Payment_Info;
DELETE FROM Shopping_Cart;
DELETE FROM Movie_Info;
DELETE FROM Show_Info;
DELETE FROM Ticket;

INSERT INTO Staff_Account VALUES ('admin', 'password', '1');

INSERT INTO Movie_Info VALUES ('Test Movie', 'English', 'PG-13', 
'This movie is a test movie for testing purposes only', 'Test Genre', '9999-12-31 23:59:59');

INSERT INTO Show_Info VALUES ('TM-001', 'Test Movie', '99 hr 59 min',
'CC, SuperScreen DLX, Wheelchair, ALD, CaptiView', 'ABC999', '23:59:59');