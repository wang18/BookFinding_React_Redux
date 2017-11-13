export function selectBook(book) {
    //actionCreator
    return{
        type: 'BOOK_SELECTED',
        payload: book
    }
}