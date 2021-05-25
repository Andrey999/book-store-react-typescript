import { IBooks } from '../types';

const data: IBooks[] = [
  {
    "title": "Building Secure and Reliable Network Applications",
    "price": 25,
    "count": 1,
    "id": "1",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
    "authors": ["Kenneth P. Birman"],
    "categories": ["Networking", "Theory"]
  },
  {
    "title": "3D User Interfaces with Java 3D",
    "price": 45,
    "count": 1,
    "id": "2",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg",
    "authors": ["Jon Barrilleaux"],
    "categories": ["Java", "Computer Graphics"]
  },
  {
    "title": "Graphics File Formats",
    "price": 55,
    "count": 1,
    "id": "3",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brown.jpg",
    "authors": ["C. Wayne Brown", "Barry J. Shepherd"],
    "categories": ["Computer Graphics"]
  },
  {
    "title": "Specification by Example",
    "price": 50,
    "count": 1,
    "id": "4",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    "authors": ["Gojko Adzic"],
    "categories": ["Software Engineering"]
  },
  {
    "title": "Visual Object Oriented Programming",
    "price": 30,
    "count": 1,
    "id": "5",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/burnett.jpg",
    "authors": ["Margaret M. Burnett", "Adele Goldberg", "Ted G. Lewis"],
    "categories": ["Programming"]
  },
  {
    "title": "Collective Intelligence in Action",
    "price": 43,
    "count": 1,
    "id": "6",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
    "authors": ["Satnam Alag"],
    "categories": ["Internet"]
  },
  {
    "title": "Hello! Python",
    "price": 40,
    "count": 1,
    "id": "7",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/briggs.jpg",
    "authors": ["Anthony Briggs"],
    "categories": ["Python"]
  },
  {
    "title": "Java Persistence with Hibernate",
    "price": 50,
    "count": 1,
    "id": "8",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg",
    "authors": ["Christian Bauer", "Gavin King"],
    "categories": ["Java"]
  },
  {
    "title": "Ruby for Rails",
    "price": 35,
    "count": 1,
    "id": "9",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
    "authors": ["David A. Black"],
    "categories": ["Web Development"]
  },
  {
    "title": "Unlocking Android",
    "price": 45,
    "count": 1,
    "id": "10",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    "categories": ["Mobile"]
  },
  {
    "title": "Android in Action, Second Edition",
    "price": 32,
    "count": 1,
    "id": "11",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    "authors": ["W. Frank Ableson", "Robi Sen"],
    "categories": ["Java"]
  },
  {
    "title": "Flex 3 in Action",
    "price": 50,
    "count": 1,
    "id": "12",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    "authors": ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
    "categories": ["Internet"]
  },
  {
    "title": "Flex 4 in Action",
    "price": 30,
    "count": 1,
    "id": "13",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
    "authors": ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
    "categories": ["Internet"]
  },
  {
    "title": "Building Secure and Reliable Network Applications",
    "price": 25,
    "count": 1,
    "id": "14",
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
    "authors": ["Kenneth P. Birman"],
    "categories": ["Networking", "Theory"]
  },
];

interface IBookStoreApi {
  getBooks: () => Promise<IBooks[]>
}

export const BookStoreApi: IBookStoreApi = {
        getBooks() {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(data)
              }, 1000);
            })
        }
}