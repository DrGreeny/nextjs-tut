import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();
  const { artikelid, varianteId } = router.query;

  return (
    <div>
      <h1>
        Die ID lautet {artikelid} für Variante {varianteId}
      </h1>
    </div>
  );
}
