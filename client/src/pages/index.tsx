import React from "react";
import { CardsContainer, HomeContainer, HomeContent, Title, TitleContainer, TitleUnderline } from "./style";
import { UserCard, Navbar } from "components";

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <HomeContent>
        <TitleContainer>
        <Title>
          PTA de desenvolvimento 2023.2
          </Title>
        <TitleUnderline />
        </TitleContainer>
        <CardsContainer>
          {
            data.map((item, index)=> {
              return(
                <UserCard
                  key={index}
                  name={item.name}
                  age={item.age}
                  pronouns={item.pronouns}
                  linkedin={item.linkedin}
                  github={item.github}
                  image={item.image}
                  />
              )
            })
          }
      </CardsContainer>
      </HomeContent>
    </HomeContainer>
  );
}

// dados que estão sendo passados para o componente UserCard por meio do map
const data = [
  {
    name: "Liliane Carla",
    age: 22,
    pronouns: "Ela/Dela",
    linkedin: "",
    github: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/220px-Juvenile_Ragdoll.jpg"
  },
  {
    name: "Fulane",
    age: 22,
    pronouns: "Ele/Dele",
    linkedin: "",
    github: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/220px-Juvenile_Ragdoll.jpg"
  },
  {
    name: "Fulane",
    age: 22,
    pronouns: "Ele/Dele",
    linkedin: "",
    github: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/220px-Juvenile_Ragdoll.jpg"
  },
  {
    name: "Fulane",
    age: 22,
    pronouns: "Ele/Dele",
    linkedin: "",
    github: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/220px-Juvenile_Ragdoll.jpg"
  },
]