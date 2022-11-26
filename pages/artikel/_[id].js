import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();

  const id = router.query.id;

  return (
    <div>
      <h1>{`Die ID lautet ${id}`}</h1>
    </div>
  );
}
