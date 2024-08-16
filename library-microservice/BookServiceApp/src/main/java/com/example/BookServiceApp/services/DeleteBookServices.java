//package com.example.BookServiceApp.services;
//
//
//import com.example.BookServiceApp.models.Book;
//import com.example.BookServiceApp.repository.BookRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class DeleteBookServices {
//    @Autowired
//    private BookRepo bookRepo;
//    @Autowired
//    private BorrowBookRepo borrowBookRepo;
//    public void delete(Book book) {
//        bookRepo.delete(book);
//    }
//    public void deleteById(int id) {
//
//        bookRepo.deleteById(id);
//    }
//    public boolean bookIsExist(int id) {
//        return bookRepo.findById(id).isPresent();
//    }
//
//    public Boolean checkBorrowedBooksByBookId(int id) {
//
//        List<BorrowedBook> borrowedBookList = borrowBookRepo.findAll();
//        boolean hasBorrowedBooks = false;
//        for (BorrowedBook borrowedBook : borrowedBookList) {
//            if (borrowedBook.getBook().getBookID()== id) {
//                hasBorrowedBooks = true;
//                return hasBorrowedBooks ;
//            }
//        }
//        return hasBorrowedBooks;
//    }
//}
