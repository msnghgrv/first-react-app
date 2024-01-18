import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {books} from './books'
import Book from './Book'
// import { get } from 'http';

const BookList= ()=>{
  const getBook=(id)=>{
    const book = books.find((book)=>book.id === id);
    console.log(book)

  }
    return( 
       <>
    <h1>{"amazon best sellers"}</h1>
    <section className='booklist'>
      
         {books.map((book, index)=>{
          return <Book {...book} key= {book.id} getBook= {getBook} number= {index}/> 
        })
      }
    </section></>)
}














    const EventExample= ()=>{
      
      return <section>
        <form >
          <h2>Some Form</h2>
          <input 
          type='text' 
          name='example'
          onChange={(e)=>console.log(e.target.value)}
          ></input>
        <button type= 'submit'>submit</button>
        <div>
        <button onClick={()=>console.log('this is the submit click')}>Click Me </button>
        </div>
        </form>
    
      </section>
    }
    // const names =['john', 'peter', 'susan']
    // const newNames= names.map((item)=>{
      //   return <h1>{item}</h1>
    // })

// const Image= (props)=>{
//     return (
//       <img
//         src={props.img}
//         alt={Title}
//       />
//     );
// }
// const Title = () => <h2>The Psychology Of Money</h2>;
// const Author =()=>{
//     const InlineHeadStyles={
//         color:'#617d98',
//         fontsize:'0.75rem',
//         marginTop:'05.rem'
//     };
//     return <h4 style={InlineHeadStyles}>Morgan Housel</h4>;
// }
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>) 