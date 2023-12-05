import React from "react";
import { HomeContainer, HomeContent, CardsContainer} from "./styles";
import { Navbar, UserCard } from "components";

const data = [
  {
    name: 'Liliane Carla',
    age: 22,
    pronouns: 'ela / dela',
    image: 'https://avatars.githubusercontent.com/u/72657066?v=4',
    linkedin: '',
    github: '',
  },
  {
    name: 'Fulane de Tal',
    age: 22,
    pronouns: 'ele / dele',
    image: '',
    linkedin: '',
    github: '',
  }
];

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <HomeContent>
        <div
        style={{
          width: 'fit-content',
        }}
        >
        <h1 style={{
          fontFamily: 'Barlow',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
          PTA de desenvolvimento 2023.2
        </h1>
        <div style={{
          height: 2,
          marginTop: 10,
          backgroundColor: '#969dff',
        }}/>
        </div>
        <CardsContainer>
          {data.map((user) => (
            <UserCard
              name={user.name}
              age={user.age}
              pronouns={user.pronouns}
              image={user.image}
              linkedin={user.linkedin}
              github={user.github}
            />
          ))}
        </CardsContainer>
      </HomeContent>
    </HomeContainer>
  );
}
