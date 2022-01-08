import styled from "styled-components";

const SidebarStyles = styled.div`
  background: black;
  box-shadow: 0 0.625rem 2.5rem -0.4375rem rgba(0, 0, 0, 0.5);
  color: white;

  position: static;

  width: 20rem;
  height: 100vh;
  padding: 0 1.5rem 1.5rem 1.5rem;

  z-index: 1000;
`;

export default function Sidebar() {
  return (
    <SidebarStyles>
      <p>{"< Back"}</p>
      <h2>Sidebar</h2>

      <form>
        <h4>Options</h4>
        <fieldset>
          <div className="form-control">
            <label htmlFor="full">Full</label>
            <input id="full" type="radio" />
            <label htmlFor="half">Half</label>
            <input id="half" type="radio" />
            <label htmlFor="quarter">Quarter</label>
            <input id="quarter" type="radio" />
          </div>
        </fieldset>
      </form>
    </SidebarStyles>
  );
}
