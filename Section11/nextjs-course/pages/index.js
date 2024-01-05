import { Fragment } from 'react';

import Hero from '@/components/home-page/hero';
import FeaturedPost from '@/components/home-page/featured-post';

const DUMMY_POST = [
  {
    slug: 'introduction-to-nextjs',
    title: 'Introduction to Next.js',
    image: 'introduction-to-nextjs.jpg',
    excerpt:
      'Discover the core concepts of Next.js, the React framework for production-ready applications, and understand why it stands out.',
    date: '2024-01-05',
  },
  {
    slug: 'nextjs-key-features',
    title: 'Key Features of Next.js',
    image: 'nextjs-key-features.jpg',
    excerpt:
      'Explore the built-in server-side rendering, file-based routing, and fullstack capabilities of Next.js.',
    date: '2024-01-06',
  },
  {
    slug: 'react-and-nextjs',
    title: 'React and Next.js: A Combined Power',
    image: 'react-and-nextjs.jpg',
    excerpt:
      'Learn how Next.js enhances the React experience by adding powerful features and capabilities.',
    date: '2024-01-07',
  },
  {
    slug: 'what-is-react',
    title: 'What is React?',
    image: 'what-is-react.jpg',
    excerpt:
      'Unravel the fundamentals of React, its key features, and why it is a top choice for modern web development.',
    date: '2024-01-08',
  },
  {
    slug: 'building-spas-with-react',
    title: 'Building Single-Page Applications with React',
    image: 'building-spas-with-react.jpg',
    excerpt:
      'Dive into the approaches of building SPAs with React, from widget-based to full-page management.',
    date: '2024-01-09',
  },
  {
    slug: 'understanding-file-based-routing',
    title: 'Understanding File-based Routing in Next.js',
    image: 'understanding-file-based-routing.jpg',
    excerpt:
      'Learn the ins and outs of file-based routing in Next.js and how it simplifies navigation between pages.',
    date: '2024-01-10',
  },
  {
    slug: 'file-based-vs-code-based-routing',
    title: 'File-based vs Code-based Routing in Next.js',
    image: 'file-based-vs-code-based-routing.jpg',
    excerpt:
      'Compare file-based routing in Next.js with traditional code-based routing, and understand their respective benefits.',
    date: '2024-01-11',
  },
  {
    slug: 'nextjs-project-creation',
    title: 'NextJS Project Creation: A Comprehensive Guide',
    image: 'nextjs-project-creation.jpg',
    excerpt:
      'Step-by-step guide to setting up a full-fledged NextJS project, integrating routes and components.',
    date: '2024-01-12',
  },
  {
    slug: 'nextjs-routes-planning',
    title: 'Planning Routes in Your NextJS Project',
    image: 'nextjs-routes-planning.jpg',
    excerpt:
      'Understand how to plan and implement both static and dynamic routes in your NextJS project.',
    date: '2024-01-13',
  },
  {
    slug: 'nextjs-page-pre-rendering',
    title: 'Page Pre-Rendering in NextJS',
    image: 'nextjs-page-pre-rendering.jpg',
    excerpt:
      'Explore the benefits and methods of pre-rendering pages in NextJS, from static generation to incremental static generation.',
    date: '2024-01-14',
  },
  {
    slug: 'handling-dynamic-routes-nextjs',
    title: 'Handling Dynamic Routes in NextJS',
    image: 'handling-dynamic-routes-nextjs.jpg',
    excerpt:
      'A guide to understanding and managing dynamic routes in NextJS, including pre-generated paths and server-side rendering.',
    date: '2024-01-15',
  },
  {
    slug: 'data-fetching-in-nextjs',
    title: 'Data Fetching Techniques in NextJS',
    image: 'data-fetching-in-nextjs.jpg',
    excerpt:
      'Master the art of data fetching in NextJS, covering static site generation, server-side rendering, and client-side fetching.',
    date: '2024-01-16',
  },
  {
    slug: 'optimizing-nextjs-pages',
    title: 'Optimizing Pages in NextJS',
    image: 'optimizing-nextjs-pages.jpg',
    excerpt:
      'Learn the best practices in optimizing NextJS pages, including meta tags, component reuse, and image optimization.',
    date: '2024-01-17',
  },
  {
    slug: 'nextjs-api-routes-overview',
    title: 'Understanding API Routes in NextJS',
    image: 'nextjs-api-routes-overview.jpg',
    excerpt:
      'An overview of API routes in NextJS and how they facilitate backend functionalities within the React framework.',
    date: '2024-01-18',
  },
  {
    slug: 'implementing-api-routes-nextjs',
    title: 'Implementing API Routes in NextJS Projects',
    image: 'implementing-api-routes-nextjs.jpg',
    excerpt:
      'Learn to implement API routes in NextJS, with practical examples like newsletter registration and comments feature.',
    date: '2024-01-19',
  },
  {
    slug: 'react-context-in-nextjs',
    title: 'Managing State with React Context in NextJS',
    image: 'react-context-in-nextjs.jpg',
    excerpt:
      'A deep dive into using React Context for state management in NextJS applications.',
    date: '2024-01-20',
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_POST} />
    </Fragment>
  );
}

export default HomePage;
