import {categoryList} from '../books API/books-api';

import {booksByCategory} from '../books API/books-api';

import {topBooks} from '../books API/books-api';

import {renderBooksAllCat} from './render-function-books';

import {renderBooksByCat} from './render-function-books';


let page;

async function loadBooks(e){
    e.preventDefault();
    page=1;

}