"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  function deleteHandler() {
    const options = { method: "DELETE" };
    fetch(`http://localhost:9999/topics/${id}`, options)
      .then((res) => res.json())
      .then((result) => {
        router.push("/");
        router.refresh();
      });
  }
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <input type="button" value="delete" onClick={deleteHandler} />
          </li>
        </>
      ) : null}
    </ul>
  );
}
