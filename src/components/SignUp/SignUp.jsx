import React, { useCallback, useEffect, useState } from "react";
import * as S from "../../style/SignUp.style";
import cart from "../../assets/img/nonabilryo_cart.png";
import axios from "axios";
import CONFIG from "../../config/config.json";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    id: "",
    password: "",
    email: "",
    tell: "",
    adress: "",
    emailVerifyCode: "",
    tellVerifyCode: "",
  });

  const handleSignupChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setSignUpData((prev) => ({ ...prev, [name] : value }));
    },
    [setSignUpData]
  );

  const ServerConnect = async () => {
    const SignUpData = {
      name: signUpData.name,
      id: signUpData.id,
      password: signUpData.password,
      adress: signUpData.adress,
    };
  };

  useEffect(() => {
    ServerConnect();
  }, []);

  const EmailCheckHandler = async () => {
    const response = await axios.post(
      `/sso/verify/email`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        'email' : signUpData.email
      },
      { withCredentials: true }
    );
    return response;
  };

  const EmailCheck = () => {
    EmailCheckHandler()
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  const TellCheckHandler = async () => {
    const response = await axios.post(
      `/sso/verify/tell`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        'tell' : signUpData.tell
      },
      { withCredentials: true }
    );
    return response;
  };

  const TellCheck = () => {
    TellCheckHandler()
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  const NickCheckHandler = async () => {
    console.log(signUpData.name)
    const response = await axios.post(
      `/sso/verify/name`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        'name' : signUpData.name
      }
    );
    return response;
  };

  const NickCheck = () => {
    NickCheckHandler()
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };
  const SubmitHandler = async () => {
    console.log(signUpData)
    const response = await axios.post(
      `${CONFIG.SERVER}/sso/sign-up`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        'name' : signUpData.name,
        'id' : signUpData.id,
        'email' : signUpData.email,
        'emailVerifyCode' : signUpData.emailVerifyCode,
        'password' : signUpData.password,
        'tell' : signUpData.tell,
        'tellVerifyCode' : signUpData.tellVerifyCode
      },
      { withCredentials: true }
    );
    return response;
  }
  const Submit = () => {
    SubmitHandler()
      .then((e) => console.log(e))
      .catch((e) => console.log(e))
  }
  

  return (
    <>
      <S.back />
      {/* <S.cart img src={cart} alt="cart" /> */}
      <S.cart img src={cart} alt="cart" />

      <S.title1>환영합니다,</S.title1>
      <S.title2>노나빌려</S.title2>
      <S.title3>입니다!</S.title3>
      <S.nickcheck onClick={NickCheck}>중복 확인</S.nickcheck>

      {/* <S.nickbox
        placeholder="닉네임"
        type="name"
        id="name"
        name="name"
        onChange={handleSignupChange}
      /> */}
      <S.idbox
        placeholder="아이디를 입력해주세요"
        type="id"
        id="id"
        name="id"
        onChange={handleSignupChange}
      />
      <S.emailcheck >인증하기</S.emailcheck>
      <S.emailicertinum placeholder="인증 번호" 
        type="emailVerifyCode"
        id="emailVerifyCode"
        name="emailVerifyCode"
        onChange={handleSignupChange}
      />
      <S.emailpass>확인</S.emailpass>
      <S.passwordbox placeholder="비밀번호를 입력해주세요" />
      <S.passcheck placeholder="비밀번호를 다시 입력해주세요" />
      <S.phonenumbox placeholder="전화번호를 입력해주세요" />

      <S.nickbox
        placeholder="닉네임"
        type="name"
        id="name"
        name="name"
        onChange={handleSignupChange}
      />
      <S.emailbox
        placeholder="이메일을 입력해주세요"
        type="email"
        id="email"
        name="email"
        onChange={handleSignupChange}
      />
      <S.emailcheck onClick={EmailCheck}>중복 확인</S.emailcheck>
      <S.passwordbox
        placeholder="비밀번호를 입력해주세요"
        type="password"
        id="password"
        name="password"
        onChange={handleSignupChange}
      />
      <S.phonenumbox
        placeholder="전화번호를 입력해주세요"
        type="tell"
        id="tell"
        name="tell"
        onChange={handleSignupChange}
      />

      <S.numcertifi onClick={TellCheck}>인증하기</S.numcertifi>
{/* ##      <S.phonenumbox placeholder="전화번호를 입력해주세요" /> */}
      <S.phonecertinum 
          placeholder="인증 번호" 
          type="tellVerifyCode"
          id="tellVerifyCode"
          name="tellVerifyCode"
          onChange={handleSignupChange}
        />
      <S.phonepass>확인</S.phonepass>

      <S.signup onClick={Submit}>회원가입</S.signup>
    </>
  );
}
export default SignUp;
