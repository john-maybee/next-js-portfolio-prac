import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

// import Image from 'next/image';
// import Script from 'next/script';


export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
    
    </Layout>
  );
}

{/* <Script 
    src="https://connect.facebook.net/en_US/sdk.js"
    strategy='lazyOnload'
    onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
    }            
/> */}

{/* <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
/> */}

// this is the facebook sdk script that is needed to use the facebook login button in the nextjs app //
// <script src="https://connect.facebook.net/en_US/sdk.js" /> 