import React from "react";
import SideNav from "../components/AdminNav/SideNav/SideNav";
import Background from "../components/Background/Background";
import AdminContainer from "../components/AdminContainer/AdminContainer";
import Container from "../../student/components/UI/Container";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Background>
        <SideNav />
        <Container className="m-auto w-11/12 h-full py-24 px-20 bg-transparent">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold ">Câu Hỏi</h1>
            <Link
              to="/#"
              className="bg-lightBlue px-4 py-2 rounded-xl font-medium text-white"
            >
              Add User
            </Link>
          </div>
        </Container>
      </Background>
    </>
  );
}

export default Home;
