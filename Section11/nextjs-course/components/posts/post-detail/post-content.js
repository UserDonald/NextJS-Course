import classes from './post-content.module.css';
import PostHeader from './post-header';

const DUMMY_POST = {
  slug: 'introduction-to-nextjs',
  title: 'Introduction to Next.js',
  image: 'introduction-to-nextjs.jpg',
  date: '2024-01-05',
  content: '# This is a first post',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      CONTENT
    </article>
  );
}

export default PostContent;
