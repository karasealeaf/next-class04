import Link from "next/link";

type petsType = { name: string; id: number };

let pets: petsType[] = [
  {
    name: "Darcy",
    id: 0,
  },
  {
    name: "Buddy",
    id: 1,
  },
  {
    name: "Zelda",
    id: 2,
  },
  {
    name: "Tess",
    id: 3,
  },
  {
    name: "Nanuk",
    id: 4,
  },
  {
    name: "Rover",
    id: 5,
  },
  {
    name: "Reginald",
    id: 6,
  }
];

export default function Home() {
  return (
    <div>
      <h4>This is a website about animals: here are many animals!</h4>
      {pets.map(pet => {
        return (
          <div key={pet.id}>
          <br />
          <Link href={`/animals/${pet.name.toUpperCase()}`}>{pet.name}</Link> </div>
        )
      })}
    </div>
  );
}
