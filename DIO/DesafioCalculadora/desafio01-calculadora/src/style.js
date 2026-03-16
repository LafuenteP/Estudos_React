import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #282828;

  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://img.freepik.com/free-photo/blackboard-inscribed-with-scientific-formulas-calculations_1150-19413.jpg?semt=ais_user_personalization&w=740&q=80");
  background-image opacity: 0.2;
`;

export const Content = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  min-height: 350px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
