import styled from "styled-components";

export const back = styled.div`
  width: 480px;
  height: 1750px;
  transform: rotate(45deg);
  transform-origin: 0 0;
  position: absolute;
  background: #3ddc63;
  margin-left: 900px;
  top: -825px;
`;

export const cart = styled.img`
  position: absolute;
  width: 500px;
  height: 500px;
  margin-top: 200px;
  margin-left: 100px;
`;

export const title1 = styled.div`
  text-align: right;
  color: black;
  font-size: 40px;
  font-family: Noto Sans KR;
  font-weight: 700;
  margin-left: 1150px;
  margin-top: 50px;
  position: absolute;
  width: 185px;
  height: 40px;
`;

export const title2 = styled.div`
  text-align: right;
  color: #3ddc63;
  font-size: 50px;
  font-family: Noto Sans KR;
  font-weight: 700;
  position: absolute;
  margin-left: 1025px;
  margin-top: 95px;
  width: 175px;
  height: 50px;
`;

export const title3 = styled.div`
  text-align: right;
  color: black;
  font-size: 45px;
  font-family: Noto Sans KR;
  font-weight: 700;
  word-wrap: break-word;
  position: absolute;
  margin-left: 1205px;
  margin-top: 100px;
  width: 130px;
  height: 50px;
`;

export const nickcheck = styled.button`
  width: 130px;
  height: 55px;
  background: #3ddc63;
  border-radius: 15px;
  border: none;
  margin-left: 1205px;
  margin-top: 200px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Pretendard;
  position: absolute;
  font-weight: 600;
`;

export const nickbox = styled.input`
  &::placeholder {
    width: 150px;
    height: 20px;
    color: #adadad;
    font-size: 20px;
    font-family: Noto Sans KR;
    position: absolute;
    margin-left: 30px;
  }
  width: 400px;
  height: 55px;
  position: absolute;
  background: white;
  border-radius: 15px;
  border: 2px #efefef solid;
  margin-top: 200px;
  margin-left: 785px;
`;

export const namebox = styled.input`
  &::placeholder {
    width: 160px;
    height: 20px;
    color: #adadad;
    font-size: 20px;
    font-family: Noto Sans KR;
    position: absolute;
    margin-left: 30px;
  }
  width: 545px;
  height: 55px;
  position: absolute;
  background: white;
  border-radius: 15px;
  border: 2px #efefef solid;
  margin-top: 280px;
  margin-left: 785px;
`;

export const emailbox = styled.input`
  &::placeholder {
    width: 180px;
    height: 20px;
    color: #adadad;
    font-size: 20px;
    font-family: Noto Sans KR;
    position: absolute;
    margin-left: 30px;
  }
  width: 400px;
  height: 55px;
  position: absolute;
  background: white;
  border-radius: 15px;
  border: 2px #efefef solid;
  margin-top: 360px;
  margin-left: 785px;
`;

export const emailcheck = styled.button`
  width: 130px;
  height: 55px;
  background: #3ddc63;
  border-radius: 15px;
  border: none;
  margin-left: 1205px;
  margin-top: 360px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Pretendard;
  position: absolute;
  font-weight: 600;
`;

export const passwordbox = styled.input`
  &::placeholder {
    width: 195px;
    height: 20px;
    color: #adadad;
    font-size: 20px;
    font-family: Noto Sans KR;
    position: absolute;
    margin-left: 30px;
  }
  width: 545px;
  height: 55px;
  position: absolute;
  background: white;
  border-radius: 15px;
  border: 2px #efefef solid;
  margin-top: 440px;
  margin-left: 785px;
`;