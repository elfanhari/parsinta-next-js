import { useRouter } from 'next/router';

export default function Show() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      The wild card is: {slug}
    </div>
  );
}
