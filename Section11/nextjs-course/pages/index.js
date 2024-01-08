import { Fragment } from 'react';

import Hero from '@/components/home-page/hero';
import FeaturedPost from '@/components/home-page/featured-post';
import { getFeaturedPosts } from '@/lib/posts-util';
import Head from 'next/head';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
