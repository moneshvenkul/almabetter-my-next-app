import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  // Function to handle programmatic navigation
  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button onClick={() => handleNavigate('/about')}>Go to About</button>
    </div>
  );
};

export default Navigation;