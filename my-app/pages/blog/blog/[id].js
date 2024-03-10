import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 200px' }}>
          <h2>Liste des Blogs</h2>
          <ul>
            <li>
              <Link href="/blog/1">
                <a>Blog 1</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/2">
                <a>Blog 2</a>
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ flex: '1' }}>
          <h1>Blog {id}</h1>
          <p>Contenu de la page de blog.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
