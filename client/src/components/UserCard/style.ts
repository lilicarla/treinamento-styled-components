import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 100px;
  width: 500px;
  border-radius: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 1px 1px 10px rgba(150, 157, 255, 0.25);
  background-color:#ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-family: Barlow;
`;

interface ProfileImageProps {
  imageUrl: string;
}

export const ProfileImage = styled.div<ProfileImageProps>`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: #969dff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

export const IconImage = styled.img`
  height: 20px;
  width: auto;
`;


export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`;

export const Text = styled.p`
  font-size: 14px;
  padding-top: 5px;
  padding: 0;
  margin: 0;
  line-height: 1.5;
`;