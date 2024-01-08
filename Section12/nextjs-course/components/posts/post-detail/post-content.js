import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    // p(paragraph) {
    //   const { node } = paragraph;

    //   if (node.children[0].tagName === 'img') {
    //     const image = node.children[0];

    //     return (
    //       <div className={classes.image}>
    //         <Image
    //           src={`/images/posts/${post.slug}/${image.properties.src}`}
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }

    //   return <p>{paragraph.children}</p>;
    // },
    code(code) {
      const { className, children } = code;
      const language = className ? className.split('-')[1] : 'javascript'; // Assuming 'className' is like 'language-js'
      console.log(className);
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language} // Now language will be set
          children={children} // Remove trailing new line which might cause issues
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
