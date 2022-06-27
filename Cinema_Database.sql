CREATE TABLE Staff_Account (
employeeID varchar(8) not null,
staffPassword varchar(32) not null,
isDarkMode bool not null,
primary key (employeeID)
);
CREATE TABLE User_Account (
username varchar(16) not null,
userPassword varchar(32) not null,
isDarkMode bool not null,
firstName varchar(16) not null,
lastName varchar(16) not null,
dateOfBirth date not null,
email varchar(64) not null,
address varchar(32),
city varchar(16),
zipCode int,
phoneNumber int,
primary key (username)
);
CREATE TABLE Payment (
cardNumber int not null,
expirationDate date not null,
cvv int not null,
address varchar(32) not null,
city varchar(16) not null,
zipCode int not null,
userID varchar(16) not null,
primary key (cardNumber),
foreign key (userID) references User_Account (username) on delete cascade
);
CREATE TABLE Shopping_Cart (
cartID varchar(16) not null,
userID varchar(16) not null,
dateTimeStamp datetime not null,
totalPrice double not null,
primary key (cartID),
foreign key (userID) references User_Account (username) on delete cascade
);
CREATE TABLE Movie_Info (
movieName varchar(32) not null,
language varchar(16) not null,
rating varchar(8) not null,
movieDescription blob not null,
genre varchar(32) not null,
releaseDate datetime not null,
primary key (movieName)
);
CREATE TABLE Show_Info (
showID varchar(16) not null,
movieName varchar(32) not null,
runTime varchar(16) not null,
roomFeatures blob not null,
roomNumber varchar(8),
showTime time not null,
primary key (showID),
foreign key (movieName) references Movie_Info (movieName) on delete cascade
);
CREATE TABLE Ticket (
ticketID varchar(16) not null,
cartID varchar(16) not null,
movieName varchar(32) not null,
showID varchar(16) not null,
roomNumber varchar(2) not null,
seatNumber int not null,
price double not null,
primary key (ticketID),
foreign key (cartID) references Shopping_Cart (cartID),
foreign key (movieName) references Movie_Info (movieName),
foreign key (showID) references Show_Info (ShowID)
);