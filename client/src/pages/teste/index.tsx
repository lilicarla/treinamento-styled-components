import React from "react";
import { HomeContainer, HomeContent, CardsContainer} from "./styles";
import { Navbar } from "components";

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

export default function Teste() {
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
        {
          data.map((item, index) => (
            <div style={{
              height: 100,
              width: 500,
              borderRadius: 10,
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 20,
              paddingBottom: 20,
              boxShadow: '1px 1px 10px rgba(150, 157, 255, 0.25)',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontFamily: 'Barlow',
            }}
            key={index}
            >
              <div style={{
                borderRadius: '50%',
                height: 60,
                width: 60,
                backgroundColor: '#969dff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}/>
              <div style={{
                display: 'flex',
                flex: 1,
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignContent: 'center',
              }}>
              <h4>
              {item.name}
              </h4>
              <p style={{
                fontSize: 14,
                paddingTop: 5,
                padding: 0,
                margin: 0,
                lineHeight: 1.5,
              }}>
              {item.age} anos
              <br/>
              {item.pronouns}
              </p>
              </div>
              <a href={item.github}
              target="_blank"
              style={{
                marginRight: 20,
              }}
              ><img src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} style={{
                  height: 25,
                  width:'auto',
                }} /></a>
                <a href={item.linkedin}
                target="_blank"
                ><img src={'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'} style={{
                  height: 25,
                  width:'auto',
                }} /></a>
            </div>
          ))
        }
        </CardsContainer>
      </HomeContent>
    </HomeContainer>
  );
}


/* <div style={{
  height: 100,
  width: 500,
  borderRadius: 10,
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 20,
  paddingBottom: 20,
  boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.10)',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  fontFamily: 'Barlow',
  marginBottom: 20,
  marginTop: 20,
}}>
  <div style={{
    borderRadius: '50%',
    height: 60,
    width: 60,
    backgroundColor: '#969dff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  }}/>
  <div style={{
    display: 'flex',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
  }}>
  <h4>
  Nome Completo da Pessoa
  </h4>
  <p style={{
    fontSize: 14,
    paddingTop: 5,
    padding: 0,
    margin: 0,
    lineHeight: 1.5,
  }}>
  22 anos
  <br/>
  ele / dele
  </p>
  </div>
    <img src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} style={{
      height: 25,
      width:'auto',
      marginRight: 20,
    }} />
    <img src={'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'} style={{
      height: 25,
      width:'auto',
    }} />
</div> */