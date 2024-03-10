import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const BlogImage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>Blog {id} Image</h1>
      <p>Contenu de la page d'image pour le blog {id}.</p>
      <Footer />
    </div>
  );
};

export default BlogImage;
