import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 8px 8px 0px 0px hsl(9000 50% 20%);
  padding: 20px 20px 20px 20px;

  min-width: 120 px;
  width: fit-content;

  font-weight: bold;
  font-family: "Roboto", sans-serif;

  // Center content
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    padding: 10px 10px 10px 10px;
    box-shadow: 5px 5px 0px 0px hsl(9000 50% 20%);
    font-size: 0.8rem;
  }
`;

type ButtonProps = {
  linkText: string;
  href: string;
};

export default function Button(props: ButtonProps) {
  const { linkText, href } = props;

  return (
    <Container className="">
      <AnchorLink className="link" href={href}>
        {linkText}
      </AnchorLink>
    </Container>
  );
}
