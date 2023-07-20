"use client";
import CreateNote from "./create-note";
import Note from "./note";
import { useState, useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import NoteSkeleton from "./note-skeleton";

const Notes = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useClerk();
  const username = user?.username as string;
  console.log(username);
  useEffect(() => {
    setLoading(true);
    fetch("/api/note", {
      headers: { username: username },
    })
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        alert("Error fetching data");
      });
  }, [username]);

  return (
    <div className="min-h-screen container mx-auto px-6 text-white">
      <h2 className="pt-5 scroll-m-20 border-b border-b-stone-200 pb-2 text-2xl md:text-3xl font-bold tracking-tight transition-colors first:mt-0 dark:border-b-stone-700 mb-5 flex items-center justify-between">
        My notes
        <CreateNote />
      </h2>
      {loading ? (
        <div>
          <NoteSkeleton />
        </div>
      ) : (
        <div>
          {!(rows.length == 0) ? (
            <div>
              {rows.map((row: any) => (
                <div key={row.id}>
                  <Note row={row} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-3 items-center justify-items-center px-6 py-16 border rounded">
              <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                Create my first note
              </h3>
              <CreateNote />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Notes;
