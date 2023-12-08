import React from 'react';
import { IconImage, CardContainer, Text, TextContainer, ProfileImage } from './style';
import Link from 'next/link';

interface UserCardProps {
  name: string;
  age: number;
  pronouns: string;
  image: string;
  linkedin: string;
  github: string;
}

const UserCard = ({ name, age, pronouns, image, linkedin, github }: UserCardProps) => {
  return(
    <CardContainer>
    <ProfileImage imageUrl={image}/>
    <TextContainer>
      <h4>{name}</h4>
      <Text>
        {age} anos
        <br/>
        {pronouns}
      </Text>
    </TextContainer>
    <Link href={github} style={{marginRight:20}}>
    <IconImage src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
    </Link>
    <Link href={linkedin}>
    <IconImage src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'/>
    </Link>
  </CardContainer>
  );
}

export default UserCard;