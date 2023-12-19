import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();

  function movieClick(id, title) {
    router.push(`/movies/${title}/${id}`);
  }

  return (
    <div>
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          key={movie.id}
          onClick={() => movieClick(movie.id, movie.original_title)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt="Movie Poster Image"
          />
          <h4>{movie.title}</h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
