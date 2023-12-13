import React from 'react';
import '../assets/styles/Nav.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import BlogComp from '../components/BlogComp'

const Blog = () => {
  return (
    <div>
      <Nav />
      <BlogComp />
      <Footer />
    </div>
  );
}

export default Blog;