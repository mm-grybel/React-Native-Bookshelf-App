import Category from '../models/category';
import Book from '../models/book';

export const CATEGORIES = [
    new Category('c1', 'Arts & Entertainment', '#dc9779'),
    new Category('c2', 'Biographies & Memoirs', '#9eacea'),
    new Category('c3', 'Business & Careers', '#349fa4'),
    new Category('c4', 'Children\'s Books', '#d6456b'),
    new Category('c5', 'Computers & Technology', '#fed352'),
    new Category('c6', 'Education & Learning', '#02bbca'),
    new Category('c7', 'Health & Wellness', '#e46c6d'),
    new Category('c8', 'History', '#f39402'),
    new Category('c9', 'Home & Garden', '#5ee4f1'),
    new Category('c10', 'LGBTQ+', '#aeaeaf'),
    new Category('c11', 'Literature & Fiction', '#ffed02'),
    new Category('c12', 'Money & Finance', '#039343'),
    new Category('c13', 'Mystery & Thriller', '#dc9779'),
    new Category('c14', 'Personal Development', '#94bcbc'),
    new Category('c15', 'Politics & Social Sciences', '#7877b8'),
    new Category('c16', 'Religion & Spirituality', '#f06d86'),
    new Category('c17', 'Romance', '#349fa4'),
    new Category('c18', 'Science & Engineering', '#ecc955'),
    new Category('c19', 'Science Fiction & Fantasy', '#acbfe3'),
    new Category('c20', 'Sports & Outdoors', '#abcf84'),
    new Category('c21', 'Teen & Young Adult', '#d6456b'),
    new Category('c22', 'Travel & Tourism', '#ffed02')
];

export const BOOKS = [
    new Book('b1', 'Into Thin Air', 'John Krakauer', ['c2'], '08-12-1997', 'English', 'Villard Books', 'https://images-na.ssl-images-amazon.com/images/I/613xliMRGmL.jpg'),
    new Book('b2', 'The Woods', 'Harlan Coben', ['c13'], '01-04-2008', 'English', 'Dutton', 'https://images-na.ssl-images-amazon.com/images/I/91rqIu779DL.jpg'),
    new Book('b3', 'The Silence of the Lambs', 'Thomas Harris', ['c13'], '15-02-1991', 'English', 'Villard Books', 'https://images-na.ssl-images-amazon.com/images/I/81jpy6NRw2L.jpg'),
    new Book('b4', 'Midnight in Chernobyl', 'Adam Higginbotham', ['c8', 'c18'], '04-02-2020', 'English', 'Simon & Schuster', 'https://images-na.ssl-images-amazon.com/images/I/81F81v0g6IL.jpg'),
    new Book('b5', 'Ascent into Hell', 'Fergus White', ['c2', 'c20'], '11-05-2019', 'English', 'W.F. Howes', 'https://images-na.ssl-images-amazon.com/images/I/61asW6Xn4KL.jpg'),
    new Book('b6', 'Annapurna: A Woman\'s Place', 'Arlene Blum', ['c2', 'c20'], '10-11-2018', 'English', 'Blackstone Publishing', 'https://images-na.ssl-images-amazon.com/images/I/51YwQp0H60L._SY445_SX342_QL70_ML2_.jpg'),
    new Book('b7', 'The Catch', 'T. M. Logan', ['c13'], '30-04-2020', 'English', 'Zaffre', 'https://images-na.ssl-images-amazon.com/images/I/51z5YoKNRBL._SX324_BO1,204,203,200_.jpg'),
    new Book('b8', 'The Surgeon', 'Tess Gerritsen', ['c11', 'c13'], '18-06-2020', 'English', 'Penguin', 'https://images-na.ssl-images-amazon.com/images/I/71VSeQVqtFL.jpg'),
    new Book('b9', 'No Shortcuts to the Top', 'Ed Viesturs', ['c2', 'c20'], '17-10-2006', 'English', 'Broadway Books', 'https://images-na.ssl-images-amazon.com/images/I/51UsPEIlXFL._SX342_SY445_QL70_ML2_.jpg'),
    new Book('b10', 'The Girl With the Dragon Tattoo', 'Stieg Larsson', ['c13'], '07-01-2010', 'English', 'MacLehose Press', 'https://images-na.ssl-images-amazon.com/images/I/41Fib1M8cWL._SX324_BO1,204,203,200_.jpg'),
];
